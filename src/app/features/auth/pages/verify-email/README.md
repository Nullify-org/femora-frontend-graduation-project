# Verify Email Page

## Overview
Email verification page for confirming user email address after registration.

## Functionality

- Email input (pre-filled from signup)
- Verification code input
- Resend verification email button
- Countdown timer for resend
- Success/error messaging

## Verification Flow

1. User receives verification email
2. Clicks link or enters code manually
3. System confirms verification
4. Redirects to interests/goal selection pages

## Key Features

- Resend email with rate limiting
- OTP/code validation
- Time-limited verification codes
- Clear success message with next steps

## Related Files

- [../../auth.module.ts](../../auth.module.ts) - Feature module
- [../../../../core/auth/auth.service.ts](../../../../core/auth/auth.service.ts) - Authentication service
