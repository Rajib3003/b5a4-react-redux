import App from "@/App";
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
            
            
        ]
    }    
])

export default router;