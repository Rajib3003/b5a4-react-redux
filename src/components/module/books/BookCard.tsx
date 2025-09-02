
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

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
      <Card className="w-full max-w-sm relative transition-transform transform hover:scale-102 hover:shadow-lg">
        <CardHeader >
          {/* <CardTitle className="flex items-center gap-2"> 
            <span className="ms-2">{book.title}</span>
          </CardTitle> */}
          <CardAction className="absolute top-1 right-1 flex items-center p-0">           
            <UpdateBook book={book} /> 
            <Button onClick={() => deleteBook(book._id)} variant="link" className="p-0 text-red-500  cursor-pointer" >
              <Trash2  />            
            </Button>      
            
          </CardAction>
        </CardHeader>
        <CardContent>
           <span className="ms-2">{book.title}</span>
        </CardContent>
      </Card> 
    </>
  )
}
