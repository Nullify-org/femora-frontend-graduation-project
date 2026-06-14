# Interests Selection Page

## Overview
Onboarding step 3: Users select their interests from available categories.

## Functionality

- Display list of interest categories (UI/UX, Web Dev, Mobile Dev, Data Science, etc.)
- Multi-select capability
- Visual feedback for selected interests
- Next/Previous navigation buttons
- Progress indicator

## User Interaction

1. User sees available interests
2. User clicks to select/deselect interests
3. Selected interests are highlighted
4. User clicks "Next" to proceed to goal selection

## Requirements

- At least one interest must be selected
- Display 4-8 interests per screen (or paginate if many)
- Show progress (Step 3 of 4)

## API Integration

- Save selected interests via ProfileService
- Load available interests on init
- Display error if save fails

## Related Files

- [../../auth.module.ts](../../auth.module.ts) - Feature module
- [../goal/](../goal/) - Next onboarding step
