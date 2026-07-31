export enum UserRole {
  ADMIN = "ADMIN",
  LANDLORD = "LANDLORD",
  USER = "USER",
}

export type IUser = {
  id: string
  name: string
  email: string
  image: string
  role: "ADMIN" | "LANDLORD" | "USER"
  status: "ACTIVE" | "BLOCKED"
  createdAt: string
  updatedAt: string
}

export type IUserResponse = {
  success: boolean
  message: string
  data: IUser
}

export interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export interface ICategory {
  id: string
  name: string
}

export interface ICategoryResponse {
  success: boolean
  message: string
  data: ICategory[]
}

interface ApiResponse {
  success: boolean
  message: string
  meta: {
    total: number
    approved: number
    pending: number
    completed: number
    active: number
  }
  data: RentalRequest[]
}

export interface RentalRequest {
  id: string
  message: string
  moveInDate: string
  status: "APPROVED" | "ACTIVE" | "COMPLETED" | "PENDING" | "REJECTED" | string
  tenantId: string
  propertyId: string
  createdAt: string
  updatedAt: string
  tenant: {
    email: string
  }
  properties: {
    id: string
    title: string
    rent: string
    landlord: {
      email: string
    }
    category: {
      name: string
    }
  }
}
