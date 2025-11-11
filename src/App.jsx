
import { Toaster } from 'react-hot-toast'
import './App.css'
import { Outlet } from "react-router";
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {


  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar></Navbar>
      <main className=''>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
      <Toaster position='top-center'></Toaster>
    </div>
    
  )
}

export default App
