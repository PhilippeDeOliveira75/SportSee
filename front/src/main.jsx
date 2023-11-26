import React, { useEffect, useState, createContext } from 'react'
import ReactDOM from 'react-dom/client'
import '@/App.scss'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import routes from  '~react-pages'

export const methodContext = createContext(null)

methodContext.displayName = 'methodContext'


const router = createBrowserRouter(routes)

const App = () => {

  const [method, setMethod] = useState(null)
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(method)
  }, [method])

  useEffect(() => {
    setIsLoading(true);
    console.log(method);
    setIsLoading(false);
  }, [method]);

  return (

    <methodContext.Provider value={{method, setMethod}}>
      <main>
		    <RouterProvider router={router} />
	    </main>
    </methodContext.Provider>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

