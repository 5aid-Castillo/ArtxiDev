import "../styles/Services.css";
import code from "../assets/code.jpg";
import website from "../assets/web-site.png";
import websitedin from "../assets/web-site-din.png";
import appweb from "../assets/app-web.png";
import software from "../assets/software.png";
import { Link } from "react-router-dom";
import Aos  from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react';

export const Services = () => {

  useEffect(() =>{
    Aos.init({duration:2000})
  },[])
  return (
    <>
      <section className="services">
        <div className="overlay"></div>
        <img src={code} alt="" />
        <article className="services-container">
          <div className="text-Services">
            <p className="text-center text-2xl text-white fond-bold ">
              Servicios
            </p>
          </div>
        </article>
      </section>

      <section className="mt-8">
        <article >
          <p className="text-lg text-center font-bold md:text-2xl" data-aos="zoom-in">
            Todo sobre nuestros servicios
          </p>
          <p className=" text-center mt-4 text-slate-500 md:text-xl" data-aos="zoom-in">
            Como puede ver, el desarrollador ArtxiDev ofrece los siguientes
            servicios; Todos estos servicios están a cargo de nuestros
            desarrolladores.
          </p>
        </article>
        <article className="services-content mx-3 mt-6 md:mt-12" data-aos="zoom-in">
          <div >
            <img src={website} alt="web site image" className="services-icon" />
            <p className="text-lg font-bold">Sitio web estático </p>
            <p className="text-sm text-slate-500 font-semibold ">
              Sitios web estáticos de una sola página y de un mismo contenido de
              publicidad o información.
            </p>
          </div>
          <div>
            <img
              src={websitedin}
              alt="web site image"
              className="services-icon"
            />
            <p className="text-lg font-bold">Sitios web dinámicos</p>
            <p className="text-sm text-slate-500 font-semibold">
              Sitios web dinámicos para mostrar diferentes contenidos en
              múltiples secciones que harán tu sitio web interactivo.
            </p>
          </div>
          <div>
            <img src={appweb} alt="app web image" className="services-icon" />
            <p className="text-lg font-bold">Aplicaciones web</p>
            <p className="text-sm text-slate-500 font-semibold">
              Aplicaciones web que almacenen información de usuarios y/o
              productos que se puedan gestionar para implementar métodos de
              pago.
            </p>
          </div>
          <div>
            <img
              src={software}
              alt="software image"
              className="services-icon"
            />
            <p className="text-lg font-bold">Desarrollo Software</p>
            <p className="text-sm text-slate-500 font-semibold">
              Desarrollo de software que pueda cumplir con la necesidad
              especifica de tu negocio, proyecto o trabajo.
            </p>
          </div>
        </article>
      </section>
      <section className="mt-10 md:mt-14" data-aos="zoom-in">
        <p className="text-center font-semibold mx-3 text-lg ">Si ya cuentas con algún sitio web, aplicación web o software, podemos brindarte servicio de mantenimiento o mejora de tu proyecto.</p>
      </section>
      <section className="bg-slate-200 px-2 py-3 mb-10 mt-10 ">
        <p className="text-lg font-bold text-center mt-4">¿Tienes en mente un proyecto?</p>
        <div className="flex justify-center">
          <Link to="/contactanos" className="btn-start mt-8 w-1/2 md:w-1/4">Contactanos</Link>

        </div>
          
       
      </section>
    </>
  );
};
