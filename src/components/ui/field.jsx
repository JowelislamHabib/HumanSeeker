import * as React from "react"
import { cn } from "@/lib/utils"

const Field = React.forwardRef(({ className, orientation = "vertical", ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="field"
      className={cn(
        "flex w-full",
        orientation === "horizontal" ? "flex-row items-center justify-between" : "flex-col space-y-2",
        "rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900",
        className
      )}
      {...props}
    />
  )
})
Field.displayName = "Field"

const FieldContent = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="field-content"
      className={cn("flex flex-col gap-1.5", className)}
      {...props}
    />
  )
})
FieldContent.displayName = "FieldContent"

const FieldLabel = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <label
      ref={ref}
      data-slot="field-label"
      className={cn(
        "cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    />
  )
})
FieldLabel.displayName = "FieldLabel"

const FieldTitle = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="field-title"
      className={cn("font-semibold text-zinc-950 dark:text-zinc-50", className)}
      {...props}
    />
  )
})
FieldTitle.displayName = "FieldTitle"

const FieldDescription = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="field-description"
      className={cn("text-sm text-zinc-500 dark:text-zinc-400", className)}
      {...props}
    />
  )
})
FieldDescription.displayName = "FieldDescription"

export { Field, FieldContent, FieldLabel, FieldTitle, FieldDescription }
