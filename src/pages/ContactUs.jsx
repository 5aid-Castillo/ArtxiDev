import "../styles/Contact.css";
import contact from '../assets/contactus.jpg'
import { Contact } from "../components/Contact";
import Aos  from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react';

export const ContactUs = () => {
  useEffect(() =>{
    Aos.init({duration:2000})
  },[])
  return (
    <>
      <section className="contact">
        <div className="overlay"></div>
        <img src={contact} alt="Contactanos image" />
        <article className="contact-container">
          <div className="text-contact">
            <p className="text center text-2xl text-white font-bold">
              Contactanos
            </p>
          </div>
        </article>
      </section>
      <section  data-aos="zoom-in">
        <article className="social-container">

          <ul className="social-icons">
            <li>
              <a href="https://www.instagram.com/artxi_dev?igsh=MW8wODU5N2FyZ2Y3OA%3D%3D&utm_source=qr">
                 <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=61556929273384&mibextid=uzlsIk">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://wa.link/up42t7">
                <i className="fa fa-whatsapp"></i>
              </a>
            </li>
           
          </ul>
        </article>
      </section>
      <section className="mt-5 flex mx-4 justify-center bg-slate-100 p-4 rounded-sm" >
        <article >
        <p className="text-xl font-medium md:text-center" data-aos="zoom-in">Teléfono: +52 2212054136</p>
        <p className="text-xl font-medium md:text-center" data-aos="zoom-in">Correo: artxidev@outlook.com</p> 
        </article>
      </section>
      <section className="mt-12 flex justify-center" >
        <Contact />
      </section>
    </>
  );
};
