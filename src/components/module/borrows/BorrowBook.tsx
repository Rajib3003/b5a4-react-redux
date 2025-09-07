import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useBorrowBookMutation } from "@/redux/api/baseApi";
import type { IBook, IBorrow } from "@/types";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

  interface IProps {
    book: IBook;
}

// interface BookFormValues {  
//   title: string;
//   author: string;
//   genre: string;
//   isbn: string;
//   copies: number;
//   description: string;
//   available: boolean;
// }

export default function BorrowBook({book}:IProps) {
    const [open, setOpen] = useState(false);
    const [calendarOpen, setCalendarOpen] = useState(false);

  const [date, setDate] = useState<Date | undefined>(undefined)

  const [borrowBook] = useBorrowBookMutation();

   const navigate = useNavigate();


    const form = useForm<IBorrow>({
        defaultValues: {      
             bookId: book._id || "",
             quantity: 1,
             dueDate: new Date(),       
        },
        
        
    })


    // const onSubmit: SubmitHandler<IBorrow> = async (data) => {
    //     if (!book._id) {
    //       console.error("Book ID is missing");
    //       return;
    //     }
    //     console.log("Borrow Data:", {  ...data });
    
    //     try {
    //       await borrowBook({  ...data }).unwrap();
    //       form.reset();
    //       setOpen(false);
    //       console.log("Borrow Book successfully");
    //     } catch (err) {
    //       console.error("Borrow failed:", err);
    //     }
    //   };

//     const onSubmit: SubmitHandler<IBorrow> = async (data) => {
//   await borrowBook({
//     bookId: book._id,
//     quantity: data.quantity,
//     dueDate: data.dueDate,
//   });
// };

const onSubmit: SubmitHandler<IBorrow> = async (data) => {
   
    const payload = {
    book: data.bookId,
    quantity: Number(data.quantity), // convert to number
    dueDate: new Date(data.dueDate).toISOString().split("T")[0], // format "yyyy-MM-dd"
  };

  console.log("Borrow Payload:", payload);

  try {
    await borrowBook(payload).unwrap();
    form.reset();
    setOpen(false);
    navigate("/borrow");
  } catch (err) {
    console.error("Borrow failed:", err);
  }
};


    
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      
        <DialogTrigger asChild>          
          <Button
            disabled={book.copies === 0}
            className={`cursor-pointer px-4 py-2 w-full rounded ${
                book.copies === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
            >
            Borrow
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle >Borrow Book</DialogTitle> 
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription> 
          </DialogHeader>
          
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
                control={form.control}
                name="bookId"
                render={({ field }) => (
                <FormItem >
                    <FormLabel className="mt-2">Book Id</FormLabel>
                    <FormControl>
                    <Input {...field} readOnly />
                    </FormControl>
                    
                </FormItem>
                )}
            />
            
            
            
            <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                <FormItem >
                    <FormLabel className="mt-2">Quantity</FormLabel>
                    <FormControl>
                    <Input {...field} />
                    </FormControl>                    
                </FormItem>
                )}
            />

           <div className="flex flex-col gap-3">
                <Label htmlFor="date" className="px-1">
                    Due Date
                </Label>
                <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                    <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        id="date"
                        className="w-48 justify-between font-normal"
                    >
                        {date ? date.toLocaleDateString() : "Select date"}
                        <ChevronDownIcon />
                    </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={date}
                        captionLayout="dropdown"
                        onSelect={(date) => {
                        setDate(date)
                        setCalendarOpen(false)
                        }}
                    />
                    </PopoverContent>
                </Popover>
            </div>
            
        
            
                

            <DialogFooter className="mt-4">
                <DialogClose asChild>
                <Button variant="outline" className='cursor-pointer'>Cancel</Button>
                </DialogClose>
                <Button type="submit" className='cursor-pointer bg-blue-500 hover:bg-blue-600 text-white'>Submit</Button>
            </DialogFooter>
            </form>
        </Form>


          
        </DialogContent>
      
    </Dialog>
  )
}
