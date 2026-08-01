# API Integration Documentation

## Overview

This document describes the integration between the RentNest frontend application and backend REST APIs. It maps frontend routes and components with their corresponding backend endpoints.

---

# Frontend Route & Backend API Mapping

| Frontend Route                        | Feature                                      | Backend API Endpoint                                                 |
| ------------------------------------- | -------------------------------------------- | -------------------------------------------------------------------- |
| `/`                                   | Home page with featured properties           | `GET /api/properties`                                                |
| `/properties`                         | Browse and filter properties                 | `GET /api/properties` <br> `GET /api/categories`                     |
| `/properties/[id]`                    | Property details and rental request CTA      | `GET /api/properties/:id`                                            |
| `/auth/register`                      | User registration with role selection        | `POST /api/auth/register`                                            |
| `/auth/login`                         | User login and authentication                | `POST /api/auth/login`                                               |
| `/dashboard/tenant`                   | Tenant dashboard overview and rental history | `GET /api/rentals` <br> `GET /api/payments`                          |
| `/dashboard/tenant/requests/[id]/pay` | Payment initiation flow                      | `POST /api/payments/create`                                          |
| `/payment/success`                    | Successful payment result page               | UI update using payment session information                          |
| `/payment/cancel`                     | Cancelled payment result page                | UI update using payment session information                          |
| `/dashboard/landlord`                 | Landlord dashboard overview and properties   | `GET /api/landlord/properties`                                       |
| `/dashboard/landlord/properties/new`  | Create new property                          | `POST /api/landlord/properties`                                      |
| `/dashboard/landlord/requests`        | Manage rental requests                       | `GET /api/landlord/requests` <br> `PATCH /api/landlord/requests/:id` |
| `/dashboard/admin`                    | Admin dashboard and user management          | `GET /api/admin/users` <br> `PATCH /api/admin/users/:id`             |

---

# API Modules

## Authentication APIs

### Register User

**Endpoint**

```http
POST /api/auth/register
```

**Purpose**

Creates a new user account with selected role.

---

### Login User

**Endpoint**

```http
POST /api/auth/login
```

**Purpose**

Authenticates users and provides access to protected features.

---

## Property APIs

### Get Properties

**Endpoint**

```http
GET /api/properties
```

**Purpose**

Fetch property listings for home page, browsing, and filtering.

---

### Get Property Details

**Endpoint**

```http
GET /api/properties/:id
```

**Purpose**

Fetch complete information about a specific property.

---

### Create Property

**Endpoint**

```http
POST /api/landlord/properties
```

**Purpose**

Allows landlords to create new property listings.

---

## Rental Request APIs

### Get Rental Requests

**Endpoint**

```http
GET /api/rentals
```

**Purpose**

Fetch tenant rental request history.

---

### Manage Landlord Requests

**Endpoint**

```http
GET /api/landlord/requests
```

```http
PATCH /api/landlord/requests/:id
```

**Purpose**

Allows landlords to view and update rental requests.

---

## Payment APIs

### Create Payment Session

**Endpoint**

```http
POST /api/payments/create
```

**Purpose**

Creates a payment session and redirects users to the payment gateway.

---

### Payment Result Handling

Routes:

```text
/payment/success
/payment/cancel
```

**Purpose**

Handles successful and cancelled payment responses and updates the UI accordingly.

---

## Admin APIs

### Get All Users

**Endpoint**

```http
GET /api/admin/users
```

**Purpose**

Fetch all registered users for admin management.

---

### Update User Status

**Endpoint**

```http
PATCH /api/admin/users/:id
```

**Purpose**

Allows admins to update user status and manage users.

---

# Error Handling

The frontend handles API errors using:

- Toast notifications for API responses
- Inline form validation messages
- Loading states during API requests
- Error boundary fallback UI

---

# Authentication Flow

```text
User Login
    |
    ↓
Backend Authentication API
    |
    ↓
Access Token Stored in Cookie
    |
    ↓
Protected API Requests
    |
    ↓
Role Based Dashboard Access
```
