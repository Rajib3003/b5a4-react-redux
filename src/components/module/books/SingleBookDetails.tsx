import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent,DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";
import type { IBook } from "@/types";
import { View } from "lucide-react";


export default function SingleBookDetails({bookId}:{bookId:IBook["_id"]}) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button  variant="link" className="p-0   cursor-pointer">
            <View />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Book Details</DialogTitle>
            
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">{bookId}</Label>              
            </div>
           
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>            
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
