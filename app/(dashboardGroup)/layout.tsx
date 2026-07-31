import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "./_components/DashboardLayout/AppSidebar"
import { DashboardNavbar } from "./_components/DashboardLayout/DashboardNavbar"
import { getMe } from "@/services/getme"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getMe()
  return (
    <SidebarProvider>
      <AppSidebar user={user} />

      <SidebarInset className="flex min-h-screen flex-col">
        <DashboardNavbar />
        <main className="mx-auto w-full flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
