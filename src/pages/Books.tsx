import AddBook from "@/components/module/books/AddBook";
import BookCard from "@/components/module/books/BookCard";
import { useGetBookQuery } from "@/redux/api/baseApi";
import { useAppDispatch } from "@/redux/hook";
import { useEffect } from "react";

export default function Books() {
 const { data, error, isLoading } = useGetBookQuery("undefined", {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true,
    pollingInterval: 30000,
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data?.books) {
      // dispatch(setBooks(data.books));
    }
  }, [data, dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading books!</div>;

  // const books = useAppSelector(selectBooks);
  return (
    <>
      {/* Books Page
      {data?.data?.map((book: any) => (
        <div key={book._id} className="border p-4 mb-4">
          <h2 className="text-xl font-bold">{book.title}</h2>
          <p className="text-gray-600">Author: {book.author}</p>
          <p className="text-gray-600">Genre: {book.genre}</p>
          <p className="text-gray-600">Published Year: {book.publishedYear}</p>
          <p className="text-gray-600">Published Year: {book.copies}</p>
        </div>
      ))} */}
       <div className="flex items-center justify-between mb-5 p-4 bg-white rounded-lg shadow-md mt-4 bg-white dark:bg-gray-800">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Tasks</h1>
      <div>
       
      </div>
      <AddBook />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">         
        {!isLoading && data?.data?.map((book: any) => (<BookCard book={book} key={book._id} />))}  
      </div>
    </>
  )
}
