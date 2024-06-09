import {  NavLink } from 'react-router-dom';
import '../../styles/Navbar.css'
import { Fade as Hamburger } from 'hamburger-react'
import { useState } from 'react';
import 'boxicons'; 

export const Navbar = () => {

    const [isOpen, setOpen] = useState(false)

    const close = () => setOpen(false);
    
  return (
    <>
    <div className='header'>
        <nav className='nav-bar nav-container'> 
            <div className="nav__data">
                <a href="/" className="nav__logo text-lg md:text-3xl">
                      
                    Artxi Dev              
                </a>
                <div className="nav__togle hamburger-btn" id="nav-toggle">
                <Hamburger color="#4FD1C5" toggled={isOpen} toggle={setOpen} />
              
                </div>
            </div>

            {/* Nav MENU */}
            <div className={isOpen ?'nav__menu show-menu' :'nav__menu ' } id="nav-menu">
                <ul className="nav__list">
                    <li onClick={close}>
                        <NavLink className='nav__link' to="/">Inicio</NavLink> 
                    </li>
                    <li onClick={close}>
                        <NavLink className='nav__link'  to="/servicios">Servicios</NavLink> 
                    </li>
                   {/*  <li>
                        <Link className='nav__link' to="/precios">Precios</Link> 
                    </li> */}
                    {/* <li>
                        <Link className='nav__link' to="/nosotros">Nosotros</Link> 
                    </li> */}
                    <li onClick={close}>
                        <NavLink className='nav__link' to="/contactanos">Contactanos</NavLink> 
                    </li>
                    <li className='mt-5 hidden md:block'>
                        <a href="https://wa.link/up42t7" target="__blank" className='whatsapp-button '>Chat en WhatsApp <box-icon name='whatsapp'  animation='tada-hover' type='logo' color="#ffff"></box-icon></a> 
                    </li>
             
                </ul>
            </div>
        </nav>
        </div>
    </>
  )
}
