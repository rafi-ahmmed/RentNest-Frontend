"use client"
import { Button } from "@/components/ui/button"
import { Receipt } from "lucide-react"
import { useRouter } from "next/navigation"
import React from "react"

const BackButton = ({
  path,
  btnContent,
}: {
  path: string
  btnContent: string
}) => {
  const router = useRouter()
  const handleBack = () => {
    router.replace(path)
  }

  return (
    <Button
      onClick={handleBack}
      className="h-11 flex-1 cursor-pointer font-semibold"
    >
      <Receipt className="h-4 w-4" />
      <span>{btnContent}</span>
    </Button>
  )
}

export default BackButton
