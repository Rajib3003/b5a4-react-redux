"use client"



import { useState, type ReactNode } from "react"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog"

type ConfirmDialogProps = {
  trigger: ReactNode
  title?: string
  description?: string
  confirmText?: string
  cancelText?: string
  onConfirm?: () => void
  open?: boolean // ✅ add this
  onOpenChange?: (open: boolean) => void // ✅ add this
}

export function ConfirmDialog({
  trigger,
  title = "Are you sure?",
  description = "This action cannot be undone.",
  confirmText = "Yes, delete",
  cancelText = "Cancel",
  onConfirm,
}: ConfirmDialogProps) {
  const [open, setOpen] = useState(false)

  const handleConfirm = () => {
    if (onConfirm) onConfirm()
    setOpen(false)
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        {trigger}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer">{cancelText}</AlertDialogCancel>
          <AlertDialogAction className="bg-red-500 text-black hover:bg-red-600 cursor-pointer" onClick={handleConfirm}>
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
