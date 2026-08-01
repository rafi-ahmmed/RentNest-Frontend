import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { LandlordProperty } from "@/lib/types"
import { CheckCircle2, Eye, MapPin, Trash2, XCircle } from "lucide-react"
import React from "react"

const LandlordPropertyCard = ({
  property: item,
}: {
  property: LandlordProperty
}) => {
  return (
    <Card
      key={item.id}
      className="flex flex-col justify-between border-slate-200/80 bg-slate-50/70 shadow-2xs transition-all hover:shadow-xs dark:border-slate-800 dark:bg-slate-900/50"
    >
      <div>
       
        <CardHeader className="space-y-1.5 p-3.5 pb-2">
          <div className="flex items-center justify-between gap-2">
            <Badge className="border-none bg-primary/10 px-2 py-0 text-[10px] font-semibold text-primary capitalize hover:bg-primary/20">
              {item.category.name}
            </Badge>

           
            <Badge
              className={`flex items-center gap-1 border-none px-2 py-0 text-[10px] font-semibold ${
                item.iaAvailable
                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                  : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
              }`}
            >
              {item.iaAvailable ? (
                <>
                  <CheckCircle2 className="h-2.5 w-2.5" /> Available
                </>
              ) : (
                <>
                  <XCircle className="h-2.5 w-2.5" /> Rented
                </>
              )}
            </Badge>
          </div>

         
          <div className="flex items-baseline justify-between gap-2 pt-0.5">
            <CardTitle className="line-clamp-1 text-base font-bold text-foreground">
              {item.title}
            </CardTitle>
            <p className="shrink-0 text-xs font-extrabold text-primary">
              ৳{item.rent}
              <span className="text-[10px] font-normal text-muted-foreground">
                /mo
              </span>
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-2 p-3.5 pt-0">
          {/* Address */}
          <p className="flex items-center gap-1 text-[11px] text-muted-foreground">
            <MapPin className="h-3 w-3 shrink-0 text-primary" />
            <span className="truncate">{item.address}</span>
          </p>

          
          <p className="line-clamp-2 text-[11px] leading-relaxed text-muted-foreground">
            {item.description}
          </p>

       
          <div className="flex flex-wrap gap-1 pt-1">
            {item.amenities.map((amenity, index) => (
              <span
                key={index}
                className="inline-block rounded border border-slate-200/60 bg-background px-1.5 py-0.5 text-[9px] font-medium text-foreground capitalize dark:border-slate-700/60 dark:bg-slate-800"
              >
                {amenity}
              </span>
            ))}
          </div>
        </CardContent>
      </div>

     
      <CardFooter className="flex items-center justify-between gap-2 border-t border-slate-200/60 p-3.5 pt-2 dark:border-slate-800">
        <button
          type="button"
          className="inline-flex flex-1 cursor-pointer items-center justify-center gap-1 rounded-md border border-input bg-background px-2.5 py-1.5 text-xs font-semibold text-foreground shadow-2xs transition-colors hover:bg-accent"
        >
          <Eye className="h-3 w-3 text-primary" />
          Details
        </button>

        <button
          type="button"
          disabled
          className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-1 rounded-md border border-rose-200 bg-rose-50/50 px-2.5 py-1.5 text-xs font-semibold text-rose-400 opacity-50 dark:border-rose-900/30 dark:bg-rose-950/20 dark:text-rose-500"
        >
          <Trash2 className="h-3 w-3" />
          Delete
        </button>
      </CardFooter>
    </Card>
  )
}

export default LandlordPropertyCard
