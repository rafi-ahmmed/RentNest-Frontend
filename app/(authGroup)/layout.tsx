import React, { ReactNode } from "react"

const authLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" bg-primary/3">
      {children}
    </div>
  )
}

export default authLayout
