
import { createRoot } from 'react-dom/client'
import './index.css'

import {  RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './provider/theme-provider.tsx'
import router from './routes/index.tsx'
import { stroe } from './redux/store.ts'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Provider store={stroe}>
        <RouterProvider router={router} />
    </Provider>  
  </ThemeProvider>   
)
