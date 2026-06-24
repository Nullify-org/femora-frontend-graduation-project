# Login Page

## Overview
User login page for authenticated access to the application.

## Functionality

- Email input field
- Password input field
- "Remember me" checkbox
- "Forgot password" link
- Login button
- Sign-up link
- Error messaging
- Loading state

## Form Validation

- Email: valid email format required
- Password: not empty

## Login Flow

1. User enters credentials
2. System validates input
3. Calls login API via AuthService
4. On success: stores token and redirects to dashboard
5. On failure: displays error message

## Success Handling

- Save JWT token to storage
- Save user info to state
- Redirect to dashboard

## Error Handling

- Invalid credentials
- Account locked
- Server errors
- Network errors

## Related Files

- [../../auth.module.ts](../../auth.module.ts) - Feature module
- [../../../../core/auth/auth.service.ts](../../../../core/auth/auth.service.ts) - Authentication service
- [../../../../core/services/storage.service.ts](../../../../core/services/storage.service.ts) - Token storage
