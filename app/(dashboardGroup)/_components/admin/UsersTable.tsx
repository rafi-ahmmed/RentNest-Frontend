"use client"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { IUser } from "@/lib/types"
import { Eye, UserX } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import UserDetailsModal from "./UserDetailsModal"

const UsersTable = ({ users }: { users: IUser[] }) => {
  const [open, setOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null)

  return (
    <>
      <Card className="border-border/60 bg-card shadow-xs">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold">
            All Users ({users.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-muted/40">
                <TableRow>
                  <TableHead className="pl-6">User</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Change Status</TableHead>
                  <TableHead>Joined At</TableHead>
                  <TableHead className="pr-6 text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="h-48 text-center">
                      <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                          <UserX className="h-6 w-6 text-muted-foreground/70" />
                        </div>
                        <p className="text-base font-semibold text-foreground">
                          No Users Found
                        </p>
                        <p className="text-xs">
                          There are currently no registered users available to
                          display.
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  users.map((user) => (
                    <TableRow key={user.id} className="hover:bg-muted/30">
                      <TableCell className="pl-6 font-medium">
                        <div className="flex items-center gap-3">
                          <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border bg-muted">
                            <Image
                              src={
                                user.image ||
                                "https://i.ibb.co.com/fYrk3K68/user-1.png"
                              }
                              alt={user.name}
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          </div>
                          <span className="font-semibold text-foreground capitalize">
                            {user.name}
                          </span>
                        </div>
                      </TableCell>

                      {/* Email */}
                      <TableCell className="text-sm text-muted-foreground">
                        {user.email}
                      </TableCell>

                      {/* Role Badge */}
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={`text-[11px] font-semibold ${
                            user.role === "ADMIN"
                              ? "border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400"
                              : user.role === "LANDLORD"
                                ? "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400"
                                : "border-slate-500/30 bg-slate-500/10 text-slate-600 dark:text-slate-400"
                          }`}
                        >
                          {user.role}
                        </Badge>
                      </TableCell>

                      <TableCell>
                        <Select value={user.status}>
                          <SelectTrigger className="h-8 w-27.5 text-xs font-semibold">
                            <SelectValue placeholder="Status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem
                              value="ACTIVE"
                              className="text-xs font-medium text-emerald-600"
                            >
                              Active
                            </SelectItem>
                            <SelectItem
                              value="BLOCKED"
                              className="text-xs font-medium text-rose-600"
                            >
                              Blocked
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>

                      <TableCell className="text-xs text-muted-foreground">
                        {new Date(user.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </TableCell>

                      <TableCell className="pr-6 text-right">
                        <button
                          type="button"
                          onClick={() => {
                            setOpen(true)
                            setSelectedUser(user)
                          }}
                          className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-input bg-background px-3 py-1.5 text-xs font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <Eye className="h-3.5 w-3.5 text-primary" />
                          Details
                        </button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      <UserDetailsModal
        open={open}
        setOpen={setOpen}
        selectedUser={selectedUser}
      />
    </>
  )
}

export default UsersTable
