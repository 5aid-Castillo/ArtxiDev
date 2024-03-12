import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { Footer } from './components/layouts/Footer'
import { ContactUs } from './pages/ContactUs'
import {Navbar} from './components/layouts/Navbar'


function App() {
  
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/servicios" element={<Services />}/>
        <Route path="/contactanos" element={<ContactUs />}/>
      </Routes>
     <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
