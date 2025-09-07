

import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
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
          <Button className='cursor-pointer bg-blue-500 hover:bg-blue-600 text-white' >Add Book</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle >Add Book</DialogTitle> 
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
            {/* <FormField
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
                        <SelectValue placeholder="Select a Genre" defaultValue={"FICTION"} />
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
