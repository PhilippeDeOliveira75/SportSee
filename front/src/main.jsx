import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/App.scss'

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import routes from  '~react-pages'

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main>
		  <RouterProvider router={router} />
	  </main>
  </React.StrictMode>,
)