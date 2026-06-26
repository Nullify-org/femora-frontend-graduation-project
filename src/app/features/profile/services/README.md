# Profile Services

## Overview
Services for managing user profiles and preferences.

## Services

### `profile.service.ts`
**Purpose**: Handle profile operations and API calls
- Load user profile by role
- Update profile information
- Update preferences
- Upload profile picture
- Get profile statistics

**Methods**:
- `getProfile(): Observable<UserProfile>`
- `updateProfile(profile: UserProfile): Observable<UserProfile>`
- `getPreferences(): Observable<Preferences>`
- `updatePreferences(prefs: Preferences): Observable<Preferences>`
- `uploadProfilePicture(file: File): Observable<string>`

## Usage

```typescript
constructor(private profileService: ProfileService) {}

loadProfile() {
  this.profileService.getProfile().subscribe(profile => {
    this.profile = profile;
  });
}

saveProfile() {
  this.profileService.updateProfile(this.profile).subscribe(
    () => this.notificationService.success('Profile updated!')
  );
}
```

## Related Files

- [../profile.module.ts](../profile.module.ts) - Feature module
- [../../../../core/models/](../../../../core/models/) - User models
