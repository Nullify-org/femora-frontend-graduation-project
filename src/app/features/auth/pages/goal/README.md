# Goal Selection Page

## Overview
Onboarding step 4: Users select their primary learning goal.

## Functionality

- Display 3 goal options:
  1. **Learn** - Understand concepts and fundamentals
  2. **Practice** - Build practical skills
  3. **Build** - Create real-world projects
- Single-select only
- Goal description/explanation
- Navigation buttons
- Progress indicator (Step 4 of 4)

## User Interaction

1. User sees goal options
2. User selects one goal
3. User clicks "Complete" button
4. Goal is saved
5. User is redirected to dashboard

## API Integration

- Save selected goal via ProfileService
- Complete onboarding flag
- Redirect on success

## Related Files

- [../../auth.module.ts](../../auth.module.ts) - Feature module
- [../interests/](../interests/) - Previous onboarding step
- [../../dashboard/](../../dashboard/) - Post-onboarding destination
