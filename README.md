# RentNest

A modern property rental management platform that connects tenants, landlords, and admins with seamless property browsing, rental requests, and secure online payments.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [User Journey](#user-journey)
- [Tech Stack](#tech-stack)
- [Dependencies](#dependencies)
- [Installation & Setup](#installation--setup)
- [API Integration](#api-integration)
- [Contributions](#contributions)
- [How to Contribute](#how-to-contribute)
- [License](#license)
- [Contact](#contact)

---

## About the Project

RentNest is a full-stack property rental management application designed to simplify the rental process between tenants and landlords.

The platform allows users to explore available properties, filter properties based on their requirements, submit rental requests, complete secure online payments, and manage rental activities through role-based dashboards.

The system includes three different user roles:

- **Tenant** — Browse properties, request rentals, make payments, and submit reviews.
- **Landlord** — Create and manage property listings, handle rental requests, and track earnings.
- **Admin** — Manage users, properties, rental requests, and overall platform activities.

---

## Project Overview

RentNest provides a complete rental marketplace experience with modern UI/UX and scalable backend integration.

### Main Objectives:

- Provide an easy-to-use property discovery platform.
- Enable landlords to manage rental listings efficiently.
- Create a secure rental request and payment workflow.
- Provide role-based dashboards for different users.
- Ensure smooth API communication with structured error handling.

### Core Workflow:

```
Register/Login
        ↓
Browse Properties
        ↓
View Property Details
        ↓
Submit Rental Request
        ↓
Wait for Approval
        ↓
Payment via Stripe
        ↓
Payment Success
        ↓
Leave Review
```

---

## Key Features

### Public Features

- Responsive Property Grid with optimized images using Next.js `Image`.
- Display property price, location, category, and available amenities.
- Advanced search and filtering system:

  - Location filtering
  - Price range filtering
  - Property type filtering
  - Amenities filtering

- Real-time property updates.
- Property details page including:

  - Image gallery
  - Property description
  - Landlord information
  - Rental request CTA

- Loading states with skeleton UI.
- Error handling with Next.js error boundaries.

---

### Tenant Features

- User authentication:

  - Registration
  - Login
  - Form validation
  - Error messages

- Rental request system:

  - Submit rental request through interactive form/modal.
  - Track request status:

    - Pending
    - Approved
    - Rejected
    - Active

- Payment integration:

  - Stripe Checkout integration.
  - Secure payment redirection.
  - Payment success page.
  - Payment cancel page.

- Tenant dashboard:

  - Rental request history.
  - Payment history table.

---

### Landlord Features

- Landlord dashboard:

  - Total properties overview.
  - Active rental requests.

- Property management:

  - Create property listings.

  <!-- * Update property information.
  * Remove listings. -->
  - Upload image URLs.
  - Manage property availability.

- Rental request management:

  - View incoming tenant requests.
  - Approve requests.
  - Reject requests.
  - Success/error toast notifications.

---

### Admin Features

- Admin dashboard:

  - Total users overview.
  - Total properties overview.
  - Pending rental requests overview.

- User management:

  - View all users.
  - Manage user status.
  - Ban/Unban users.

---

## User Journey

### Tenant Journey

```
Register/Login
        ↓
Browse Properties
        ↓
View Details
        ↓
Submit Request Form
        ↓
Wait for Approval
        ↓
Approved → Pay Now CTA
        ↓
Stripe Checkout
        ↓
Payment Success Page
        ↓
Leave Review
```

---

### Landlord Journey

```
Register/Login
        ↓
Dashboard Overview
        ↓
Create Property Listing
        ↓
Receive Rental Requests
        ↓
Approve / Reject Request
        ↓
Tenant Gets Payment Access
        ↓
Track Rental Activity
```

---

## Tech Stack

**Frontend:**
Next.js · React · TypeScript · Tailwind CSS · Shadcn UI

**State Management & Data Fetching:**
TanStack Query · Server Actions

**Form & Validation:**
React Hook Form · Zod

**Backend:**
Node.js · Express.js · TypeScript

**Database:**
PostgreSQL · Prisma ORM

**Authentication:**
JWT · HTTP-only Cookies

**Payment:**
Stripe Checkout

**Tools:**
Git · GitHub · VS Code · Postman

---

## Dependencies

Major frontend dependencies:

```json
{
  "next": "^15.x",
  "react": "^19.x",
  "typescript": "^5.x",
  "tailwindcss": "^4.x",
  "@tanstack/react-query": "^5.x",
  "react-hook-form": "^7.x",
  "zod": "^3.x",
  "stripe": "^17.x"
}
```

## API Integration

The frontend communicates with backend REST APIs for:

- Authentication
- Property management
- Rental requests
- Payments
- Admin operations

Detailed API mapping is available in:

```
API_INTEGRATION.md
```

---

## Contributions

| Name        | Role                 | Contributions                                                                   |
| ----------- | -------------------- | ------------------------------------------------------------------------------- |
| Rafi Ahmmed | Full Stack Developer | Frontend development, API integration, authentication, dashboards, payment flow |

---

## Contact

**Live URL:**
[Live Site](https://rent-nest-frontend-beta.vercel.app/)

**Email:**
[rafi.ahmmed920@gmail.com](mailto:rafi.ahmmed920@gmail.com)

**Portfolio:**
https://rafi-ahmmed.vercel.app
