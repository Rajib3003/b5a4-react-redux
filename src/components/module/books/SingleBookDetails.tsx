import { useState } from "react"
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import type { IBook } from "@/types";
import { View } from "lucide-react";

export default function SingleBookDetails({ book }: { book: IBook }) {
  const [open, setOpen] = useState(false)

  // Run code only when dialog opens
  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen)
    // if (isOpen) {
    //   console.log("single book ==============", book)
      
    // }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      {/* <form> */}
        <DialogTrigger asChild>
          <Button variant="link" className="p-0 cursor-pointer">
            <View />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Book Details</DialogTitle>
          <DialogDescription>
            View complete information about this book.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-2">
          <div className="grid grid-cols-3 gap-2">
            <Label>Title:</Label>
            <span className="col-span-2">{book.title}</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <Label>Author:</Label>
            <span className="col-span-2">{book.author}</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <Label>Genre:</Label>
            <span className="col-span-2">{book.genre}</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <Label>ISBN:</Label>
            <span className="col-span-2">{book.isbn}</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <Label>Copies:</Label>
            <span className="col-span-2">{book.copies}</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <Label>Available:</Label>
            <span className="col-span-2">{book.available ? "Yes" : "No"}</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <Label>Description:</Label>
            <span className="col-span-2">{book.description}</span>
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" className="cursor-pointer">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
      {/* </form> */}
    </Dialog>
  )
}
