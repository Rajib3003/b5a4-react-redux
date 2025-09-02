import AddBook from "@/components/module/books/AddBook";
import BookCard from "@/components/module/books/BookCard";
import { useGetBookQuery } from "@/redux/api/baseApi";
// import { useAppDispatch } from "@/redux/hook";
// import { useEffect } from "react";

export default function Books() {
 const { data, error, isLoading } = useGetBookQuery("undefined", {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true,
    pollingInterval: 30000,
  });

  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   if (data?.books) {
  //     dispatch(setBooks(data.books));
  //   }
  // }, [data, dispatch]);

  return (
    <div className="container max-w-7xl mx-auto  max-w-5xl bg-white">  
      <div className="flex items-center justify-between mb-5 p-4 bg-white rounded-lg shadow-md mt-4 bg-white dark:bg-gray-800">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Tasks</h1>
        <div></div>
        <AddBook />
      </div>
      {isLoading && (
        <div className="text-blue-600 font-semibold">Loading books...</div>
      )}    
      {error && (
        <div className="text-red-600 font-semibold">Error loading books!</div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">         
        {!isLoading && data?.data?.map((book: any) => (<BookCard book={book} key={book._id} />))}  
      </div>
    </div>
  )
}
