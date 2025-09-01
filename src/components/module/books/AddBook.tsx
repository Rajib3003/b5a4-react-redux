
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

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

    const onSubmit:SubmitHandler<FieldValues> = async () => {
        // const payload = {
        //     ...data,
        //     dueDate: data.dueDate ? format(data.dueDate, "yyyy-MM-dd") : null,
        // }
        // const res = await createBook(payload);
        form.reset();
        setOpen(false);
    }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      
        <DialogTrigger asChild>
          <Button >Add Task</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
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
