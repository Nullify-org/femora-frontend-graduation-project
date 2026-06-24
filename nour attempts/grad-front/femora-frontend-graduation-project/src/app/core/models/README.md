# Core - Models

## Overview
This folder contains all TypeScript interfaces and models used throughout the application. These are shared data structures that define the shape of API responses and application state.

## Models to Create

### User & Authentication
- `User.ts` - Base user model
- `AuthResponse.ts` - Login/signup response
- `UserRole.ts` - Enum for user roles (BUYER, SELLER, INSTRUCTOR, ADMIN)
- `UserProfile.ts` - Extended user profile information

### E-Learning (LMS)
- `Course.ts` - Course data structure
- `Module.ts` - Course module/section
- `Lesson.ts` - Individual lesson
- `Quiz.ts` - Quiz definition
- `Assignment.ts` - Assignment model
- `Enrollment.ts` - Course enrollment

### Marketplace
- `Product.ts` - Physical/digital product
- `Cart.ts` - Shopping cart
- `CartItem.ts` - Item in cart
- `Order.ts` - Purchase order
- `OrderItem.ts` - Item in order
- `Payment.ts` - Payment information

### Communication
- `Message.ts` - Chat/messaging message
- `Conversation.ts` - Conversation/thread
- `Notification.ts` - App notification

### AI Assistant
- `ChatMessage.ts` - AI conversation message
- `ChatSource.ts` - RAG source information

## Usage

Import models in your services and components:

```typescript
import { User } from '@app/core/models/user.model';
import { Course } from '@app/core/models/course.model';
```

## Best Practices

- Keep models focused and single-purpose
- Use interfaces for API contracts
- Create separate models for API requests and responses if they differ
- Document complex model structures
- Export models from an `index.ts` file for cleaner imports
