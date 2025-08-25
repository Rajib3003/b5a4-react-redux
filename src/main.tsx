
import { createRoot } from 'react-dom/client'
import './index.css'

import {  RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './provider/theme-provider.tsx'
import router from './routes/index.tsx'


createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    {/* <BrowserRouter> */}
      <RouterProvider router={router} />
    {/* </BrowserRouter>  */}
  </ThemeProvider>
   
)
