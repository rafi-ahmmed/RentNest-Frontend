"use client"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import RentalRequestModal from "./RentalRequestModal"
import { Property, RentalRequestPayload } from "@/lib/types"
import { useMutation } from "@tanstack/react-query"
import { createRentalReq } from "@/app/(dashboardGroup)/_actions/tenantActions"
import { toast } from "sonner"

const RequestBookingButton = ({ property }: { property: Property }) => {
  const [open, setOpen] = useState(false)

  const mutation = useMutation({
    mutationFn: (payload: RentalRequestPayload) => {
      console.log("payload=", payload)
      return createRentalReq(payload!)
    },

    onSuccess: (data) => {
      console.log(data)
      setOpen(false)
      if (data.success) {
        toast.success(data.message || "Rental request submitted!")
      }else{
        toast.error(data.message || "Something went wrong")
      }
    },

    onError: (error) => {
      console.log(error)
      toast.error(error.message || "Something went wrong")
    },
  })

  const handleRequestSubmit = (payload: RentalRequestPayload) => {
    console.log("payload==", payload)
    mutation.mutate(payload)
  }

  return (
    <>
      <Button
        size="lg"
        className="w-full font-bold shadow-xs"
        disabled={property.iaAvailable === false}
        onClick={() => setOpen(true)}
      >
        {property.iaAvailable === false
          ? "Currently Booked "
          : "Request Booking"}
      </Button>

      <RentalRequestModal
        open={open}
        onOpenChange={setOpen}
        property={property}
        onSubmit={handleRequestSubmit}
        loading={mutation.isPending}
      />
    </>
  )
}

export default RequestBookingButton
