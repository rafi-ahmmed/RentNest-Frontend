"use client"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { useDebouncedCallback } from "use-debounce"

const PropertySearchBar = () => {
  const pathname = usePathname()
  const router = useRouter()
  const params = new URLSearchParams()
  const searchParams = useSearchParams()
  const [search, setSearch] = useState(searchParams.get("searchTerm") ?? "")

  const handleSearch = useDebouncedCallback((value: string) => {
    if (value) {
      params.set("searchTerm", value)
    } else {
      params.delete("searchTerm")
    }
    router.push(`${pathname}?${params.toString()}`)
  }, 500)

  return (
    <div className="relative w-full sm:w-72">
      <Search className="absolute top-2.5 left-3 h-4 w-4 text-muted-foreground" />
      <Input
        onChange={(e) => {
          setSearch(e.target.value)
          handleSearch(e.target.value)
        }}
        value={search}
        placeholder="Search location or title..."
        className="h-10 pl-9"
      />
    </div>
  )
}

export default PropertySearchBar
