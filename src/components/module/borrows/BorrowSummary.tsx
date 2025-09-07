import { useBorrowSummaryBookQuery } from "@/redux/api/baseApi";
import type { IBorrowSummary } from "@/types";



export default function BorrowSummary() {
  const { data, isLoading, error } = useBorrowSummaryBookQuery();
  const borrows: IBorrowSummary[] = data?.data || [];

  return (
    <div className="container max-w-7xl mx-auto bg-white p-4">
      <h1 className="text-2xl font-bold mb-4">Borrow Summary</h1>

      {isLoading && (
        <div className="text-blue-600 font-semibold mb-4">Loading Borrowed Books...</div>
      )}

      {error && (
        <div className="text-red-600 font-semibold mb-4">Error loading Borrowed Books!</div>
      )}

      {borrows.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2 text-left">Book Title</th>
                <th className="border px-4 py-2 text-left">ISBN</th>
                <th className="border px-4 py-2 text-left">Total Quantity</th>
              </tr>
            </thead>
            <tbody>
              {borrows.map((borrow: any) => (
                <tr
                  key={borrow.book._id} // use unique _id as key
                  className="hover:bg-gray-50"
                >
                  <td className="border px-4 py-2">{borrow.book.title}</td>
                  <td className="border px-4 py-2">{borrow.book.isbn}</td>
                  <td className="border px-4 py-2">{borrow.totalQuantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-gray-500 font-medium mt-4">No borrowed books found.</div>
      )}
    </div>
  );
}
