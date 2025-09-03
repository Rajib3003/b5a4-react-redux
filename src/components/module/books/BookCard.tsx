
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardHeader } from '@/components/ui/card'
import { useDeleteBookMutation } from '@/redux/api/baseApi'
import type { IBook } from '@/types'
import { Bell, Trash2 } from 'lucide-react'
import UpdateBook from './UpdateBook'
import SingleBookDetails from './SingleBookDetails'
import { ConfirmDialog } from '@/components/confirm-dialog'






export default function BookCard({book}:{book:IBook}) {

  const [deleteBook] = useDeleteBookMutation();
 

  return (
    <>
      <Card className="w-full max-w-sm relative transition-transform transform hover:scale-102 hover:shadow-lg">
  <CardHeader>
    <CardAction className="absolute top-1 right-1 flex items-center p-0">
      {/* Copies Badge with Bell */}
      <div className="relative inline-block px-2">
        <Bell className="w-6 h-6 text-gray-700 dark:text-gray-200" />
        {book.copies > 0 && (
          <span className="absolute -top-3 -right-1 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
            {book.copies}
          </span>
        )}
      </div>

      <SingleBookDetails book={book} />
      <UpdateBook book={book} />
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

  <CardContent className="space-y-2 flex-grow">
    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
      {book.title}
    </h2>
    <p className="text-sm text-gray-600 dark:text-gray-400">
      <span className="font-medium">Author:</span> {book.author}
    </p>
    <p className="text-sm text-gray-600 dark:text-gray-400">
      <span className="font-medium">Genre:</span> {book.genre}
    </p>
    <p className="text-sm text-gray-600 dark:text-gray-400">
      <span className="font-medium">ISBN:</span> {book.isbn}
    </p>
    
    <p className="text-sm">
      <span className="font-medium">Copies: </span>
      <span
        className={`font-medium ${
          book.copies === 0 ? "text-red-500" : "text-green-600"
        }`}
      >
        {book.copies === 0 ? "Unavailable" : "Available"}
      </span>
    </p>
    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
      {book.description}
    </p>
  </CardContent>

  <div className="p-4 border-t flex justify-center">
    <Button
      disabled={book.copies === 0}
      className={`px-4 py-2 w-full rounded ${
        book.copies === 0
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-500 hover:bg-blue-600 text-white"
      }`}
    >
      Borrow
    </Button>
  </div>
</Card>

    </>
  )
}
