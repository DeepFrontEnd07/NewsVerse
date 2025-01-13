import React from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Navbar from './Components/Navbar'
import FileNotFound from './Components/FileNotFound'
import Container from './Components/Container'
import Container1 from './Components/Container1'
import Techcontainer from './Components/Techcontainer'
import Entercontainer from './Components/Entercontainer'
import Sportscontainer from './Components/Sportscontainer'
import Healthcontainer from './Components/Healthcontainer'






// make the router browser

const router=createBrowserRouter([
  {
    path:"/",
    element:<div>
      <Navbar />
      <Container/>
    </div>
    
  },
  {
    path:"/latest",
    element:<div>
    <Navbar />
    <Container1 />
  </div>
  },
  {
    path:"/technology",
    element:<div>
    <Navbar />
    <Techcontainer />
  </div>
  },
  {
    path:"/entertainment",
    element:<div>
    <Navbar />
    <Entercontainer />
  </div>
  },
  {
    path:"/sports",
    element:<div>
      <Navbar/>
      <Sportscontainer />
    </div>

  },
  {
    path:"/health",
    element:<div>
      <Navbar/>
      <Healthcontainer />
    </div>

  },
  {
    path:"/*",
    element:<FileNotFound />
  }
])


function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
