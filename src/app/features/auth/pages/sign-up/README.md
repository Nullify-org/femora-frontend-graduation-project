# Sign-Up Page

## Overview
User registration page for creating new accounts.

## Functionality

- Email input with validation
- Password input with strength indicator
- Password confirmation
- Terms & conditions checkbox
- Error message display
- Loading state during submission

## Form Validation

- Email: valid email format
- Password: minimum 8 characters, uppercase, lowercase, number
- Password confirmation: must match password
- Terms: must be checked

## API Call

Calls AuthService.signup() with user credentials

## Success Flow

1. Validate form
2. Call signup API
3. Show success message
4. Redirect to email verification page or login

## Error Handling

- Display validation errors
- Display API errors (email already exists, etc.)
- Allow retry

## Related Files

- [../../auth.module.ts](../../auth.module.ts) - Feature module
- [../../../../core/auth/auth.service.ts](../../../../core/auth/auth.service.ts) - Authentication service
