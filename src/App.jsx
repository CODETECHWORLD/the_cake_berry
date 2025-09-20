import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Products from './pages/Products'
import BackToTop from './Components/BackToTop'
import Enquiry from './pages/Enquiry'
import CustomCakes from './pages/CustomCakes'
import Cart from './pages/Cart'
import ContactUs from './pages/ContactUs'


function App() {
  

  return (
    <Router>
      <div className="">
        <main className=' flex-1'>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cakes' element={<Products/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path='/CustomCakes' element={<CustomCakes/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </main>
        <Enquiry/>
        <Footer/>
        <BackToTop/>
      </div>
    </Router>
  )
}

export default App
