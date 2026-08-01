import { Users } from "lucide-react"
import { adminGetAllUsers } from "../../_actions/adminActions"
import UsersTable from "../../_components/admin/UsersTable"

export default async function ManageUsersPage() {
  const users = await adminGetAllUsers()
// console.log(users)
  return (
    <div className="space-y-6 p-1 sm:p-4">
      {/* Header */}
      <div className="flex flex-col gap-1 border-b pb-5">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Users className="h-5 w-5" />
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Manage Users
          </h1>
        </div>
        <p className="text-sm text-muted-foreground">
          View registered users, change status using Select, and review profile
          details.
        </p>
      </div>

      <UsersTable users={users.data} />
    </div>
  )
}
