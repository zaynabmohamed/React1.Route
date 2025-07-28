// import { useState } from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Section from './components/Section/Section'
import Footer from './components/Footer/footer'
import About from './pages/About/About'
import Portfoli from './pages/Portfoli/Portfoli'
import Layout from './components/Layout/Layout';
import Contact from './pages/Contact/Contact'


function App() {
      const router = createBrowserRouter([
        {path:'', element :<Layout/>, children :[
            {path : "" , element: <Home/>},
            {path : "about" , element: <About/>},
            {path : "portfoli" , element: <Portfoli/>},
            {path : "contact" , element: <Contact/>},

        ]}
      ])

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;
