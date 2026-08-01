import { LucideProps } from "lucide-react"
import { ForwardRefExoticComponent, RefAttributes } from "react"

export enum UserRole {
  ADMIN = "ADMIN",
  LANDLORD = "LANDLORD",
  USER = "USER",
}

export type UserStatus = "ACTIVE" | "BAN"

export type IUser = {
  id: string
  name: string
  email: string
  image: string
  role: UserRole
  status: UserStatus
  createdAt: string
  updatedAt: string
}

export type IUserResponse = {
  success: boolean
  message: string
  data: IUser
}

export interface IUpdateUserStatus {
  id: string
  status: UserStatus
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

export interface ApiResponse {
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

export interface LandlordProperty {
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
  landlordId: string
  categoryId: string
  createdAt: string
  updatedAt: string
  category: {
    name: string
  }
}

export interface Category {
  id: string
  name: string
}

export interface ICreatePropertyPayload {
  title: string
  description: string
  rent: number
  size: string
  bedroom: number
  bathroom: number
  location: string
  address: string
  amenities: string[]
  images: string[]
  categoryId: string
}

export interface IPaymentRecord {
  id: string
  amount: string
  transactionId: string
  provider: string
  method: string
  status: "COMPLETED" | "PENDING" | "FAILED" | string
  tenantId: string
  rentalRequestId: string
  paidAt: string

  rentalRequest: {
    properties: {
      title: string
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