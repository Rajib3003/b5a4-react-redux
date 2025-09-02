
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { useDeleteBookMutation } from '@/redux/api/baseApi'
// import { useAppDispatch } from '@/redux/hook'
import type { IBook } from '@/types'
import { Trash2 } from 'lucide-react'
import UpdateBook from './UpdateBook'
// import { deleteBook } from '@/redux/features/books/bookSlice'





export default function BookCard({book}:{book:IBook}) {
  // const dispatch = useAppDispatch();
  const [deleteBook] = useDeleteBookMutation();
 

  return (
    <>
     <Card className="w-full max-w-sm relative">
      <CardHeader >
     <CardTitle className="flex items-center gap-2">
        <span
          className={cn(
            "h-3 w-3 rounded-full",
            {
              // "bg-green-500": book.available === "true",             
              // "bg-red-500": book.available === "false",
            }
          )}
        />
        <span className="ms-2">{book.title}</span>
      </CardTitle>
      





        <CardAction className="absolute top-2 right-2 flex items-center gap-2">
            {/* <Checkbox
                checked= {task.isCompleted}
                onClick={() => dispatch(toggleCompleteState(task._id))}
                /> */}
          <Button onClick={() => deleteBook(book._id)} variant="link" className="p-0 text-red-500">
            <Trash2  />            
          </Button>      
            <UpdateBook book={book} /> 
        </CardAction>
      </CardHeader>
      <CardContent>
        {/* <Label htmlFor="terms" className="mb-2">Discription: {task.discription}</Label>
        <Label htmlFor="terms" className="mb-2">Due Date : {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "N/A"}</Label>
        <Label htmlFor="terms">Assigned To : {assignedUser ? assignedUser.name : "Unassigned"}</Label> */}
                  
      
              
        
     
              
        
     </CardContent>
     
      
    </Card> 
    </>
  )
}
