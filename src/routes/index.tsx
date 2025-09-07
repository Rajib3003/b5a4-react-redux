import App from "@/App";
import BorrowSummary from "@/components/module/borrows/BorrowSummary";
import Books from "@/pages/Books";
import Borrow from "@/pages/Borrow";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
         path: "/",
        // element: <App />,
        Component: App,
        
        children: [
            {
                index: true,
                // path: "tasks",
                element: <Books />
            },
            {
                path: "books",
                element: <Books />
            },
            {
                path: "borrow",
                element: <Borrow />
            },
            {
                path: "borrowSammary",
                element: <BorrowSummary />
            },
            
            
        ]
    }    
])

export default router;