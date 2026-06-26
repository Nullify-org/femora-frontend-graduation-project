# Core - Services

## Overview
Core services provide essential functionality used across the application. These are singleton services that should be provided in the root module.

## Services

### `notification.service.ts`
**Purpose**: Manage notifications/toasts across the application
- Show success messages
- Show error messages
- Show warning messages
- Show info messages
- Auto-dismiss notifications
- Notification queue management

**Usage**:
```typescript
constructor(private notificationService: NotificationService) {}

this.notificationService.success('Course enrolled successfully!');
this.notificationService.error('Failed to submit assignment');
```

### `storage.service.ts`
**Purpose**: Abstraction layer for browser storage (LocalStorage/SessionStorage)
- Get/Set/Remove items from storage
- Clear storage
- Type-safe storage operations
- Easy switching between LocalStorage and SessionStorage

**Usage**:
```typescript
constructor(private storageService: StorageService) {}

// Save user preferences
this.storageService.setItem('userPreferences', preferences);

// Retrieve user preferences
const prefs = this.storageService.getItem('userPreferences');

// Remove item
this.storageService.removeItem('userPreferences');
```

## Adding New Services

When adding new core services:
1. Create the service file in this directory
2. Use `providedIn: 'root'` to provide it globally
3. Document the service in this README
4. Export from `index.ts` if created

## Related Files
- See [../auth/](../auth/) for authentication services
