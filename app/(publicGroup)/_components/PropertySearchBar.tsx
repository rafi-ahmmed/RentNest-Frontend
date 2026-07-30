"use client"
import { Input } from "@/components/ui/input"
import { Search, X } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { useDebouncedCallback } from "use-debounce"

const PropertySearchBar = () => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
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
        className="h-10 pr-9 pl-9" // ডানপাশে ক্রস বাটনের জন্য pr-9 যোগ করা হয়েছে
      />

      {/* Clear Button */}
      {search && (
        <button
          type="button"
          onClick={() => {
            setSearch("")
            handleSearch("")
          }}
          className="absolute top-2.5 right-2.5 rounded-sm p-0.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Clear search"
        >
          <X className="h-4 w-4 p-0.5 rounded-full bg-slate-200 z-20" />
        </button>
      )}
    </div>
  )
}

export default PropertySearchBar
