# Checkout Page

## Overview
Final purchase and payment processing.

## Functionality

- Review order summary
- Enter/confirm shipping address
- Select shipping method
- Select payment method
- Apply discounts
- Place order

## Checkout Steps

### Step 1: Shipping Address
- Address input form
- Use saved address
- Save new address option
- Address validation

### Step 2: Shipping Method
- Select shipping speed
- Display shipping cost
- Estimated delivery date
- Pickup option (if available)

### Step 3: Payment Method
- Credit/debit card
- Paypal
- Digital wallet (Apple Pay, Google Pay)
- Other payment methods
- Billing address same as shipping

### Step 4: Order Review
- Order items summary
- Shipping details
- Payment method
- Total price
- Promo code application

### Step 5: Place Order
- Confirm order button
- Order placed confirmation

## Order Summary

- Item list with prices
- Quantity per item
- Subtotal
- Shipping cost
- Tax
- Discount
- Total

## Features

- Order step progress indicator
- Form validation
- Secure payment
- Order confirmation email
- Order tracking info
- Return/refund info

## Payment Processing

- Secure payment gateway
- PCI compliance
- Payment error handling
- Transaction confirmation

## Success Handling

- Order confirmation page
- Order number display
- Estimated delivery
- Download invoice
- Continue shopping button

## Related Files

- [../../marketplace.module.ts](../../marketplace.module.ts) - Feature module
- [../../services/order.service.ts](../../services/order.service.ts) - Order service
- [../../services/cart.service.ts](../../services/cart.service.ts) - Cart service
- [../cart/](../cart/) - Shopping cart page
