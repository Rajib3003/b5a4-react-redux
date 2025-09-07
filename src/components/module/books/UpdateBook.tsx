
import { Button } from "@/components/ui/button";

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
          <Button  variant="link" className="p-0 text-green-500  cursor-pointer">            
            <RefreshCw />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Update Book</DialogTitle>  
            <DialogDescription>
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
                    <FormLabel className="mt-2">Author</FormLabel>
                    <FormControl>
                    <Input {...field} />
                    </FormControl>
                    
                </FormItem>
                )}
            />
            {/* <FormField
                control={form.control}
                name="genre"
                render={({ field }) => (
                <FormItem>
                    <FormLabel className="mt-2">Genre</FormLabel>
                    <FormControl>
                    <Input {...field} />
                    </FormControl>
                    
                </FormItem>
                )}
            /> */}
            <FormField
                control={form.control}
                name="genre"
                render={({ field }) => (
                <FormItem>
                <FormLabel className="mt-2">Genre</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger className="w-full">
                        <SelectValue defaultValue={"FICTION"} />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        <SelectGroup>
                        {/* <SelectLabel>Fruits</SelectLabel> */}
                        <SelectItem value="FICTION">FICTION</SelectItem>
                        <SelectItem value="NON_FICTION">NON_FICTION</SelectItem>
                        <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                        <SelectItem value="HISTORY">HISTORY</SelectItem>
                        <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                        <SelectItem value="FANTASY">FANTASY</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>             
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="isbn"
                render={({ field }) => (
                <FormItem>
                    <FormLabel className="mt-2">ISBN</FormLabel>
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
                    <FormLabel className="mt-2">Copies</FormLabel>
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
                    <FormLabel className="mt-2">Discription</FormLabel>
                    <FormControl>                    
                    <Textarea  {...field} placeholder="Type your discription here." />
                    </FormControl>                    
                </FormItem>
                )}
            />
            <DialogFooter className="mt-4">
                <DialogClose asChild>
                <Button variant="outline" className='cursor-pointer'>Cancel</Button>
                </DialogClose>
                <Button type="submit" className='cursor-pointer bg-blue-500 hover:bg-blue-600 text-white'>Save Change</Button>
            </DialogFooter>
            </form>
        </Form>


          
        </DialogContent>
      
    </Dialog>
    </>
  )
}
