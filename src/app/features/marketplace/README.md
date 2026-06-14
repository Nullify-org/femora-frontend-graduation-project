# Marketplace Feature Module

## Overview
The Marketplace feature handles all e-commerce functionality including product catalog, shopping cart, checkout, and seller dashboard.

## Pages

### `product-catalog/`
Browse and search products
- List all products
- Filter by category, price, rating
- Search functionality
- Sort options
- Product cards with info

### `product-details/`
Product information and purchase
- Full product details
- Product images/gallery
- Seller information
- Reviews and ratings
- Add to cart button
- Specifications/variants

### `cart/`
Shopping cart management
- List items in cart
- Adjust quantities
- Remove items
- Cart subtotal and taxes
- Proceed to checkout button

### `checkout/`
Purchase and payment
- Order summary
- Shipping address
- Payment method selection
- Apply coupon/discount
- Place order button

### `seller-dashboard/`
Seller product and order management
- Product list
- Create/edit products
- Order management
- Sales analytics
- Inventory management

## Services

### `product.service.ts`
- Get all products
- Get product by ID
- Search products
- Get seller products

### `cart.service.ts`
- Get cart items
- Add to cart
- Remove from cart
- Update quantities
- Clear cart

### `order.service.ts`
- Create order
- Get orders
- Get order details
- Cancel order
- Track order

## Routing

```typescript
const routes: Routes = [
  { path: 'products', component: ProductCatalogComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'seller/dashboard', component: SellerDashboardComponent }
];
```

## Key Features

- Real-time inventory updates
- Multiple payment methods
- Order tracking
- Product reviews
- Seller ratings
- Wishlist functionality
