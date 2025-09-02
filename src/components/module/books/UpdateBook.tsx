import { Button } from "@/components/ui/button";

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { useUpdateBookMutation } from "@/redux/api/baseApi";

// import { useAppDispatch } from "@/redux/hook";
import type { IBook } from "@/types";

import { RefreshCw } from "lucide-react";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

  interface IProps {
    book: IBook;
}

interface BookFormValues {  
  title: string;
  author: string;
  genre: string;
  isbn: string;
  copies: number;
  description: string;
  available: boolean;
}

export default function UpdateBook({book}:IProps) {
  const [open, setOpen] = useState(false);
  // const dispatch = useAppDispatch();
  
  const form = useForm<BookFormValues>({
    defaultValues: {      
      title: book.title,
      author: book.author,
      genre: book.genre,
      isbn: book.isbn,
      copies: book.copies,
      description: book.description,
      available: book.available,           
    },
    
    
})
const handleOpen = (value: boolean) => {
  setOpen(value);
  if (value) {
    form.reset({
      title: book.title,
      author: book.author,
      genre: book.genre,
      isbn: book.isbn,
      copies: book.copies,
      description: book.description,
      available: book.available,
    });
  }
};

const [updateBook] = useUpdateBookMutation();

const onSubmit: SubmitHandler<BookFormValues> = async (data) => {
    if (!book._id) {
      console.error("Book ID is missing");
      return;
    }

    try {
      await updateBook({ id: book._id, ...data }).unwrap();
      form.reset();
      setOpen(false);
      console.log("Book updated successfully");
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={handleOpen}>
      
        <DialogTrigger asChild>
          <Button  variant="link" className="p-0 text-green-500">            
            <RefreshCw />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Update Book list</DialogTitle>
            <DialogDescription className="sr-only">
              Make changes to your profile here. Click save when you&apos;re
              done.
              
            </DialogDescription>
           
          </DialogHeader>
          
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
            
            <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                    <Input {...field} />
                    </FormControl>
                    
                </FormItem>
                )}
            />
            
            <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Author</FormLabel>
                    <FormControl>
                    <Input {...field} />
                    </FormControl>
                    
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="genre"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Genre</FormLabel>
                    <FormControl>
                    <Input {...field} />
                    </FormControl>
                    
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="isbn"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>ISBN</FormLabel>
                    <FormControl>
                    <Input {...field} />
                    </FormControl>
                    
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="copies"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Copies</FormLabel>
                    <FormControl>
                    <Input {...field} />
                    </FormControl>
                    
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Discription</FormLabel>
                    <FormControl>                    
                    <Textarea  {...field} placeholder="Type your discription here." />
                    </FormControl>                    
                </FormItem>
                )}
            />
            


            <DialogFooter className="mt-4">
                <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Submit</Button>
            </DialogFooter>
            </form>
        </Form>


          
        </DialogContent>
      
    </Dialog>
    </>
  )
}
