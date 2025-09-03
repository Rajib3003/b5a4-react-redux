
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useAddBookMutation } from '@/redux/api/baseApi'
import type { IBook } from '@/types'

import { useState } from 'react'
import { useForm, type FieldValues, type SubmitHandler } from 'react-hook-form'


export default function AddBook() {
    const [open, setOpen] = useState(false);

    const form = useForm({
        defaultValues: {
                title: "",
                author: "",
                genre : "",
                isbn : "",
                description : "",
                copies : 0,
                available : true,
        }
    })

    const [addBook] = useAddBookMutation();

    const onSubmit:SubmitHandler<FieldValues> = async (data) => {
        // const payload = {
        //     ...data,
            
        // }
        // const res = await fetch("https://typescript-express-mongo-db.vercel.app/api/books", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(payload)
        // });
        // const result = await res.json();
        // console.log("Success:", result);
        await addBook(data as IBook);
        form.reset();
        setOpen(false);
    }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      
        <DialogTrigger asChild>
          <Button >Add Book</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Book</DialogTitle>   
          </DialogHeader>
          
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                <FormItem >
                    <FormLabel className="mt-2">Title</FormLabel>
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
                <FormItem >
                    <FormLabel className="mt-2">Author</FormLabel>
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
                <FormItem >
                    <FormLabel className="mt-2">Genre</FormLabel>
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
                <FormItem >
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
                <FormItem >
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
                <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Submit</Button>
            </DialogFooter>
            </form>
        </Form>


          
        </DialogContent>
      
    </Dialog>
  )
}
