# Recommended Products Widget

## Overview
Displays AI-recommended products based on user preferences and browsing history.

## Functionality

- Show 4-6 recommended products
- Product cards with images
- Product title and price
- Star rating and review count
- "Add to Cart" or "View Details" button
- Related product recommendations

## Product Card Shows

- Product image/thumbnail
- Product title
- Price
- Star rating (0-5)
- Number of reviews
- Seller name
- Action buttons

## Interactions

- Click product card → Navigate to product-details
- Click "Add to Cart" → Add to cart with confirmation
- Click "Save" → Save to wishlist

## Recommendation Algorithm

- Based on user interests (from onboarding)
- Based on browsing history
- Based on purchase history
- Trending products
- New products

## Empty State

If no recommendations:
- Show "Browse Products" section
- Show trending products
- Show new products

## Related Files

- [../../dashboard.module.ts](../../dashboard.module.ts) - Feature module
- [../../../marketplace/services/](../../../marketplace/services/) - Product service
- [../../../lms/services/](../../../lms/services/) - Interest service
