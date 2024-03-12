import '../../styles/Footer.css';
import logoImage from '../../assets/logo-artxidev.jpeg'
import 'boxicons'; 
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <>
        <footer className='footer'>
            <div className="container-1">
                <div className="box">
                    <figure>
                        
                        <img src={logoImage} alt="logo-artxidev" className='img-logo'/>
                        
                        <p className='text-white '>Brindamos servicios personalizados de diseño y desarrollo web de extremo a extremo.</p>
                  
                    </figure>
                </div>
                <div className="box">
                    <p className='font-bold text-white text-lg'>Compañía</p>
                    <ul>
                        <li className='text-white'><Link to="/servicios">Servicios</Link></li>
                        <li className='text-white'><Link to="/contactanos">Contactanos</Link></li>    
                             
                    </ul>
                </div>
                <div className="box">
                    <p className='font-bold text-white text-lg'>Síguenos</p>
                    <div className="social-media">
                        <a href="https://www.facebook.com/profile.php?id=61556929273384&mibextid=uzlsIk" target='__blank'>
                            <box-icon type='logo'  animation='tada-hover' name='facebook-circle' color="#ffff"></box-icon>
                        </a>
                        <a href="https://www.instagram.com/artxi_dev?igsh=MW8wODU5N2FyZ2Y3OA%3D%3D&utm_source=qr" target='__blank'>
                            <box-icon name='instagram-alt' animation='tada-hover' color="#ffff" type='logo'  ></box-icon>
                        </a>
                        <a href="https://wa.link/up42t7" target='__blank'>
                            <box-icon name='whatsapp' animation='tada-hover' type='logo' color="#ffff"></box-icon>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container-2 text-white">
                <small>&copy; 2024 <b>Artxidev</b> Todos los derechos reservados.</small>
            </div>
        </footer>
    </>
  )
}
