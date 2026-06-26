# Shopping Cart Page

## Overview
Shopping cart management and order review.

## Functionality

- List cart items
- Adjust item quantities
- Remove items
- Apply coupons/discounts
- Calculate totals
- Proceed to checkout

## Cart Layout

### Cart Items Section
- Product image/thumbnail
- Product name
- Product price
- Quantity selector
- Item subtotal
- Remove button

### Cart Summary Section
- Subtotal
- Shipping cost
- Tax
- Discount (if applied)
- Total price

### Action Buttons
- Continue Shopping
- Apply Coupon
- Proceed to Checkout

## Features

- Real-time quantity updates
- Availability checking
- Stock warnings
- Recommended related products
- Save for later option
- Coupon/discount code input
- Estimate shipping cost

## Empty Cart

- Show empty cart message
- Continue shopping button
- Recommended products

## Interactions

- Change quantity → Update cart
- Remove item → Remove from cart
- Apply coupon → Apply discount
- Proceed to checkout → Navigate to checkout

## Mobile Support

- Touch-friendly quantity buttons
- Vertical cart layout
- Easy to checkout

## Related Files

- [../../marketplace.module.ts](../../marketplace.module.ts) - Feature module
- [../../services/cart.service.ts](../../services/cart.service.ts) - Cart service
- [../checkout/](../checkout/) - Checkout page
- [../product-details/](../product-details/) - Product details
