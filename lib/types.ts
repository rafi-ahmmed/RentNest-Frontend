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
