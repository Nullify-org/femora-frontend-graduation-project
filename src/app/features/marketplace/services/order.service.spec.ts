import { TestBed } from '@angular/core/testing';
import { OrderService } from './order.service';
import { ApiClient } from '../../../core/services/api-client.service';
import { of } from 'rxjs';

describe('OrderService', () => {
  let service: OrderService;
  let apiClient: jasmine.SpyObj<ApiClient>;

  beforeEach(() => {
    apiClient = jasmine.createSpyObj<ApiClient>('ApiClient', ['post', 'get']);

    TestBed.configureTestingModule({
      providers: [
        OrderService,
        { provide: ApiClient, useValue: apiClient },
      ],
    });

    service = TestBed.inject(OrderService);
  });

  it('creates an order with a pending status from cart items', () => {
    const order = { id: 'order_1', status: 'Pending', totalAmount: 120 };
    apiClient.post.and.returnValue(of(order as any));

    service.placeOrder('user_1', [{ productName: 'Chair', quantity: 2, unitPrice: 60 }]).subscribe((result) => {
      expect(result.status).toBe('Pending');
      expect(result.id).toBe('order_1');
    });

    expect(apiClient.post).toHaveBeenCalledWith('/api/orders', jasmine.objectContaining({
      userId: 'user_1',
      status: 'Pending',
      items: jasmine.any(Array),
    }));
  });

  it('submits a browser form so the backend can redirect to Stripe', () => {
    const sessionUrl = 'https://checkout.stripe.com/pay/cs_test_123';
    apiClient.post.and.returnValue(of({ sessionUrl } as any));

    const assignSpy = spyOn(window.location, 'assign' as any).and.callFake(() => {});

    service.redirectToCheckoutSession({
      orderId: 'order_1',
      successUrl: 'https://example.com/success',
      cancelUrl: 'https://example.com/cancel',
    });

    expect(apiClient.post).toHaveBeenCalledWith('/api/payments/checkout', jasmine.objectContaining({
      orderId: 'order_1',
      successUrl: 'https://example.com/success',
      cancelUrl: 'https://example.com/cancel',
    }));
    expect(assignSpy).toHaveBeenCalledWith(sessionUrl);
  });
});
