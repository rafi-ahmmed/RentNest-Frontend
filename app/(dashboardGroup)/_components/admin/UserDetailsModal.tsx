import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { User } from "@/lib/types"
import { Calendar, CheckCircle2, Mail, Shield, UserIcon } from "lucide-react"
import Image from "next/image"

type UserDetailsModalProps = {
  open: boolean
  setOpen: (open: boolean) => void
  selectedUser: User | null
}

const UserDetailsModal = ({
  open,
  setOpen,
  selectedUser,
}: UserDetailsModalProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md p-6">
        <DialogHeader className="border-b pb-4">
          <DialogTitle className="flex items-center gap-2 text-xl font-bold">
            <UserIcon className="h-5 w-5 text-primary" /> User Profile Details
          </DialogTitle>
        </DialogHeader>

        {selectedUser && (
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-4 rounded-xl border bg-muted/30 p-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border bg-background">
                <Image
                  src={selectedUser.image || "DEFAULT_AVATAR"}
                  alt={selectedUser.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground capitalize">
                  {selectedUser.name}
                </h3>
                <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                  <Mail className="h-3.5 w-3.5" /> {selectedUser.email}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="space-y-1 rounded-lg border bg-card p-3">
                <span className="flex items-center gap-1 text-xs font-semibold text-muted-foreground">
                  <Shield className="h-3.5 w-3.5 text-primary" /> Role
                </span>
                <p className="font-bold text-foreground">{selectedUser.role}</p>
              </div>

              <div className="space-y-1 rounded-lg border bg-card p-3">
                <span className="flex items-center gap-1 text-xs font-semibold text-muted-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Status
                </span>
                <p
                  className={`font-bold ${selectedUser.status === "ACTIVE" ? "text-emerald-600" : "text-rose-600"}`}
                >
                  {selectedUser.status}
                </p>
              </div>
            </div>

            <div className="space-y-2 rounded-lg border bg-card p-3 text-xs text-muted-foreground">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-primary" /> Created At:
                </span>
                <span className="font-medium text-foreground">
                  {new Date(selectedUser.createdAt).toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between border-t pt-2">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-primary" /> Last
                  Updated:
                </span>
                <span className="font-medium text-foreground">
                  {new Date(selectedUser.updatedAt).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default UserDetailsModal
