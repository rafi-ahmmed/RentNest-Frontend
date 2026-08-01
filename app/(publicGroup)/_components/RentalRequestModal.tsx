"use client"
import { useForm } from "react-hook-form"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Home, Loader2, Mail, MapPin, Send } from "lucide-react"
import { Property, RentalRequestPayload } from "@/lib/types"

interface RentalRequestModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  property: Property | null
  onSubmit?: (payload: RentalRequestPayload) => Promise<void> | void
  loading?: boolean
}

type RentalRequestForm = {
  moveInDate: string
  message: string
}

const RentalRequestModal = ({
  open,
  onOpenChange,
  property,
  onSubmit,
  loading,
}: RentalRequestModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RentalRequestForm>({
    defaultValues: {
      moveInDate: "",
      message: "I would like to rent this property.",
    },
  })

  if (!property) return null

  const today = new Date().toISOString().split("T")[0]

  const submitHandler = async (data: RentalRequestForm) => {
    try {
      const payload: RentalRequestPayload = {
        propertyId: property.id,
        moveInDate: data.moveInDate,
        message: data.message,
      }

      if (onSubmit) {
      //   console.log("btn==", payload)
        await onSubmit(payload)
      } else {
        console.log(payload)
      }

      reset()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        if (!value) reset()
        onOpenChange(value)
      }}
    >
      <DialogContent className="max-w-lg p-5 sm:rounded-xl sm:p-8">
        <DialogHeader className="border-b pb-4 text-left">
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-2 text-xl font-bold">
              <Home className="h-5 w-5 text-primary" />
              Request to Rent
            </DialogTitle>

            <Badge
              variant="secondary"
              className="px-2.5 py-0.5 text-xs font-semibold capitalize"
            >
              {property.category.name}
            </Badge>
          </div>

          <DialogDescription className="pt-1 text-xs">
            Send a rental request directly to the landlord.
          </DialogDescription>
        </DialogHeader>

        {/* Property Info */}
        <div className="space-y-3 rounded-xl border bg-muted/30 p-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h4 className="text-base font-bold">{property.title}</h4>

              <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                {property.address}
              </p>
            </div>

            <div className="text-right">
              <span className="text-lg font-bold text-primary">
                ৳{Number(property.rent).toLocaleString()}
              </span>

              <span className="block text-[11px] text-muted-foreground">
                /month
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 border-t pt-2 text-xs">
            <Mail className="h-3.5 w-3.5 text-primary" />
            <span>Landlord Email:</span>

            <span className="font-semibold">{property.landlord.email}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
          {/* Move In Date */}
          <div className="space-y-1.5">
            <Label htmlFor="moveInDate" className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-primary" />
              Expected Move-in Date
            </Label>

            <Input
              id="moveInDate"
              type="date"
              min={today}
              {...register("moveInDate", {
                required: "Move-in date is required",
              })}
            />

            {errors.moveInDate && (
              <p className="text-xs text-red-500">
                {errors.moveInDate.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <Label htmlFor="message">Message</Label>

            <Textarea
              id="message"
              rows={4}
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Minimum 10 characters required",
                },
              })}
            />

            {errors.message && (
              <p className="text-xs text-red-500">{errors.message.message}</p>
            )}
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                reset()
                onOpenChange(false)
              }}
              disabled={loading}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Request
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default RentalRequestModal
