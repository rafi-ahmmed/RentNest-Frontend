import { LucideProps } from "lucide-react"
import { ForwardRefExoticComponent, RefAttributes } from "react"

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

export type ISidebarItem = {
  label: string
  href: string
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >
}

export interface PaymentRecord {
  id: string
  amount: string
  transactionId: string
  provider: string
  method: string
  status: string
  tenantId: string
  rentalRequestId: string
  paidAt: string
  rentalRequest: {
    properties: {
      title: string
      rent: string
      address: string
      category: {
        name: string
      }
      landlord: {
        email: string
      }
    }
  }
}

export interface Property {
  id: string
  title: string
  description: string
  rent: string
  size: string
  bedroom: number
  bathroom: number
  location: string
  address: string
  amenities: string[]
  images: string[]
  iaAvailable: boolean
  category: {
    name: string
  }
  landlord: {
    email: string
  }
}

export interface RentalRequestPayload {
  propertyId: string
  moveInDate: string
  message: string
}

export interface User {
  id: string
  name: string
  email: string
  image: string
  role: "ADMIN" | "LANDLORD" | "USER"
  status: "ACTIVE" | "BLOCKED"
  createdAt: string
  updatedAt: string
}
