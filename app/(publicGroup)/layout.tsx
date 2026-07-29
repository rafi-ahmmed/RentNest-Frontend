import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"
import React, { ReactNode } from "react"

const publicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />

      <section className="container mx-auto h-[calc(100vh-419px)]">
        {children}
      </section>
      <Footer />
    </div>
  )
}

export default publicLayout
