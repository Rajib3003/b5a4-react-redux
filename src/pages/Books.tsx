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
    <div>
      Books Page
      {data?.data?.map((book: any) => (
        <div key={book._id} className="border p-4 mb-4">
          <h2 className="text-xl font-bold">{book.title}</h2>
          <p className="text-gray-600">Author: {book.author}</p>
          <p className="text-gray-600">Genre: {book.genre}</p>
          <p className="text-gray-600">Published Year: {book.publishedYear}</p>
        </div>
      ))}
    </div>
  )
}
