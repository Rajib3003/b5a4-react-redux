
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardHeader } from '@/components/ui/card'
import { useDeleteBookMutation } from '@/redux/api/baseApi'
import type { IBook } from '@/types'
import { Trash2 } from 'lucide-react'
import UpdateBook from './UpdateBook'
import SingleBookDetails from './SingleBookDetails'
import { ConfirmDialog } from '@/components/confirm-dialog'






export default function BookCard({book}:{book:IBook}) {

  const [deleteBook] = useDeleteBookMutation();
 

  return (
    <>
      <Card className="w-full max-w-sm relative transition-transform transform hover:scale-102 hover:shadow-lg">
        <CardHeader >
          {/* <CardTitle className="flex items-center gap-2"> 
            <span className="ms-2">{book.title}</span>
          </CardTitle> */}
          <CardAction className="absolute top-1 right-1 flex items-center p-0">  
            <SingleBookDetails bookId={book._id} />         
            <UpdateBook book={book} /> 
            {/* <Button onClick={() => deleteBook(book._id)} variant="link" className="p-0 text-red-500  cursor-pointer" >
              <Trash2  />            
            </Button>             */}
            <ConfirmDialog
              trigger={
                <Button
                  variant="link"
                  className="p-0 text-red-500 cursor-pointer"
                >
                  <Trash2 />
                </Button>
              }
              title="Delete this book?"
              description="This action cannot be undone. The book will be permanently removed."
              confirmText="Yes, delete"
              cancelText="Cancel"
              onConfirm={() => deleteBook(book._id)}
            />
          </CardAction>
        </CardHeader>
        <CardContent>
           <span className="ms-2">{book.title}</span>
        </CardContent>
      </Card> 
    </>
  )
}
