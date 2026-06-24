# Marketplace Services

## Overview
Services for marketplace operations and API calls.

## Services

### `product.service.ts`
**Purpose**: Manage product operations
- Get all products with filters
- Get product by ID
- Search products
- Get seller products
- Create/update/delete products

**Methods**:
- `getProducts(filters?: ProductFilters): Observable<Product[]>`
- `getProductById(id: string): Observable<Product>`
- `searchProducts(query: string): Observable<Product[]>`
- `getSellerProducts(): Observable<Product[]>`
- `createProduct(product: Product): Observable<Product>`
- `updateProduct(id: string, product: Product): Observable<Product>`
- `deleteProduct(id: string): Observable<void>`

### `cart.service.ts`
**Purpose**: Manage shopping cart
- Get cart items
- Add/remove items
- Update quantities
- Clear cart
- Calculate totals

**Methods**:
- `getCart(): Observable<Cart>`
- `addToCart(productId: string, quantity: number): Observable<Cart>`
- `removeFromCart(cartItemId: string): Observable<Cart>`
- `updateQuantity(cartItemId: string, quantity: number): Observable<Cart>`
- `clearCart(): Observable<void>`
- `getTotal(): Observable<number>`

### `order.service.ts`
**Purpose**: Manage orders
- Create orders
- Get orders
- Get order details
- Cancel/return orders
- Track orders

**Methods**:
- `createOrder(order: Order): Observable<Order>`
- `getOrders(): Observable<Order[]>`
- `getOrderById(id: string): Observable<Order>`
- `cancelOrder(id: string): Observable<void>`
- `trackOrder(id: string): Observable<OrderTracking>`

## Usage

```typescript
constructor(
  private productService: ProductService,
  private cartService: CartService,
  private orderService: OrderService
) {}

// Get products
this.productService.getProducts().subscribe(products => {
  this.products = products;
});

// Add to cart
this.cartService.addToCart(productId, quantity).subscribe(() => {
  this.notificationService.success('Added to cart!');
});

// Create order
this.orderService.createOrder(order).subscribe(createdOrder => {
  this.router.navigate(['/orders', createdOrder.id]);
});
```

## Related Files

- [../marketplace.module.ts](../marketplace.module.ts) - Feature module
- [../../../../core/models/](../../../../core/models/) - Product/Order models
