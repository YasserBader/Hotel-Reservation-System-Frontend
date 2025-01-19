# Hotel Reservation System Frontend

## Overview

The project is a comprehensive Angular-based application designed to manage guests, rooms, and reservations for a hotel management system. It integrates with a backend service to provide efficient data management and user-friendly interfaces.

---

## Directory Structure

```
├── angular.json
├── app
│   ├── app-routing.module.ts
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── components
│   │   ├── guest-list
│   │   │   ├── guest-details-dialog
│   │   │   │   ├── guest-details-dialog.component.html
│   │   │   │   ├── guest-details-dialog.component.scss
│   │   │   │   ├── guest-details-dialog.component.ts
│   │   │   │   └── guest-details-dialog.module.ts
│   │   │   ├── guest-list.component.html
│   │   │   ├── guest-list.component.scss
│   │   │   ├── guest-list.component.ts
│   │   │   ├── guest-list.module.ts
│   │   │   └── new-guest-dialog
│   │   │       ├── new-guest-dialog.component.html
│   │   │       ├── new-guest-dialog.component.scss
│   │   │       ├── new-guest-dialog.component.ts
│   │   │       └── new-guest-dialog.module.ts
│   │   ├── new-reservation-dialog
│   │   │   ├── new-reservation-dialog.component.html
│   │   │   ├── new-reservation-dialog.component.scss
│   │   │   ├── new-reservation-dialog.component.ts
│   │   │   └── new-reservation-dialog.module.ts
│   │   ├── progress-circle
│   │   │   ├── progress-circle.component.html
│   │   │   ├── progress-circle.component.scss
│   │   │   ├── progress-circle.component.ts
│   │   │   └── progress-circle.module.ts
│   │   ├── reservation-calendar
│   │   │   ├── reservation-calendar.component.html
│   │   │   ├── reservation-calendar.component.scss
│   │   │   ├── reservation-calendar.component.ts
│   │   │   └── reservation-calendar.module.ts
│   │   ├── reservation-list
│   │   │   ├── reservation-list.component.html
│   │   │   ├── reservation-list.component.scss
│   │   │   ├── reservation-list.component.ts
│   │   │   └── reservation-list.module.ts
│   │   ├── room-list
│   │   │   ├── room-details-dialog
│   │   │   │   ├── room-details-dialog.component.html
│   │   │   │   ├── room-details-dialog.component.scss
│   │   │   │   ├── room-details-dialog.component.ts
│   │   │   │   └── room-details-dialog.module.ts
│   │   │   ├── room-list.component.html
│   │   │   ├── room-list.component.scss
│   │   │   ├── room-list.component.ts
│   │   │   └── room-list.module.ts
│   │   └── sidebar
│   │       ├── sidebar.component.html
│   │       ├── sidebar.component.scss
│   │       ├── sidebar.component.ts
│   │       └── sidebar.module.ts
│   ├── services
│   │   ├── guest.service.ts
│   │   ├── reservation.service.ts
│   │   └── room.service.ts
│   └── shared
│       ├── components
│       │   └── progress-circle
│       │       ├── progress-circle.component.html
│       │       ├── progress-circle.component.scss
│       │       ├── progress-circle.component.ts
│       │       └── progress-circle.module.ts
│       ├── constants
│       │   └── constants.ts
│       └── models
│           ├── guest.model.ts
│           ├── reservation.model.ts
│           └── room.model.ts
├── assets
├── environments
│   ├── environment.prod.ts
│   └── environment.ts
├── index.html
├── main.ts
├── polyfills.ts
├── styles.scss
├── test.ts
└── tsconfig.json
```

---

## Core Features and Components

### Guests Management

- **Guest List:** Displays a paginated list of guests (`guest-list.component.ts`).
- **Guest Details:** Shows detailed information about a guest (`guest-details-dialog.component.ts`).
- **New Guest Dialog:** Enables adding a new guest (`new-guest-dialog.component.ts`).

### Rooms Management

- **Room List:** Displays a paginated list of rooms (`room-list.component.ts`).
- **Room Details:** Provides detailed room information (`room-details-dialog.component.ts`).

### Reservations Management

- **Reservation List:** Shows a paginated list of reservations (`reservation-list.component.ts`).
- **Reservation Calendar:** Displays a calendar view of reservations (`reservation-calendar.component.ts`).
- **New Reservation Dialog:** Facilitates creating new reservations (`new-reservation-dialog.component.ts`).

---

## API Integration

### Guest Service (`guest.service.ts`)

- **Fetch Guests:** Retrieves a paginated list of guests (`getAllGuests`).
- **Guest Details:** Fetches details for a specific guest (`getGuestById`).
- **Create Guest:** Adds a new guest (`createGuest`).

### Room Service (`room.service.ts`)

- **Fetch Rooms:** Retrieves a paginated list of rooms (`getAllRooms`).
- **Room Details:** Fetches details for a specific room (`getRoomById`).

### Reservation Service (`reservation.service.ts`)

- **Fetch Reservations:** Retrieves a paginated list of reservations (`getAllReservations`).
- **Cancel Reservation:** Cancels a reservation (`cancelReservation`).
- **Create Reservation:** Adds a new reservation (`createReservation`).
- **Monthly Reservations:** Fetches reservation data for a specific month (`getReservationsByMonth`).

---

## Environment Configuration

Environment-specific settings can be modified in:

- `environment.ts`: For development.
- `environment.prod.ts`: For production.

### Example Configuration

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
};
```

---

## Styling and Theming

- **SCSS** is used for styling the application.
- `styles.scss`: Includes global styles, Taiga UI themes, and Tailwind CSS.

---

## Testing

- **Unit Tests:** Use Karma and Jasmine for unit testing.
- **Integration Tests:** Add integration tests within `.spec.ts` files.
- `test.ts`: Entry point for running all tests.

---

## Prerequisites

Ensure the following are installed:

- Node.js v14 or later
- Angular CLI
- PostgreSQL (for backend services)
- Taiga UI Library

---

## Setup Instructions

### Install Dependencies

Run the following command to install all required dependencies:

```bash
npm install
```

### Start Development Server

Run the development server using the command:

```bash
ng serve
```

---

## Important Notes

1. Ensure the backend services are running before starting the frontend.
2. Update the `environment.ts` file with the correct API base URL.
3. Follow the directory structure to maintain consistency and scalability.
