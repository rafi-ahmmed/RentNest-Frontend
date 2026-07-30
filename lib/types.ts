export type IUser = {
  id: string
  name: string
  email: string
  image: string
  role: "ADMIN" | "LANDLORD" | "TENANT"
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
