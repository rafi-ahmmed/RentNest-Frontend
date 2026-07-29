import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"
import { getMe } from "@/services/getme"
import React, { ReactNode } from "react"

const publicLayout = async ({ children }: { children: ReactNode }) => {
  const user = await getMe()

  return (
    <div>
      <Navbar user={user} />

      <section className="container mx-auto h-[calc(100vh-419px)]">
        {children}
      </section>
      <Footer />
    </div>
  )
}

export default publicLayout
