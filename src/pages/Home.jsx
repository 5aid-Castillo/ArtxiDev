import "../styles/Home.css";
import introImage from "../assets/Computer.svg";
import supportImage from "../assets/support.png";
import qualityImage from "../assets/quality.png";
import humanImage from "../assets/humans.png";
import rocket from "../assets/rocket.png";
import phone from "../assets/phone_object.png";
import books from "../assets/Books.png";
import { Animation } from "../components/Animation";
import { Link } from "react-router-dom";
import { Card } from "../components/Card";
import Aos  from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react';
export const Home = () => {

  useEffect(() => {
    Aos.init({duration:2000})
  },[]);
  return (
    <>
      {/* <section className='landing-page wrapper grid gap-8 justify-items-center items-center pb-12 md:grid-cols-2 md:py-24'> */}
      <section className="landing-page ">
        {/* <article className=' text-center space-y-6 md:text-center md:space-y-8'> */}
        <article className="text-landing space-y-4 text-center md:text-center">
          <p className="text-3xl font-bold text-very-dark-blue md:text-4xl " data-aos="zoom-in">
            Haz crecer tu negocio con <strong>Artxi Dev</strong>
          </p>
          <p className="text-gray-50 text-1xl md:text-slate-950" data-aos="zoom-in">
            Podemos ayudarte a hacer realidad tus ideas en el mundo digital. 
            {/* Podemos ayudarte a crecer en este mundo digital */}
          </p>
          <Link to="/contactanos" className="btn-start md:mx-0" data-aos="zoom-in">
            Empezar ahora
          </Link>
        </article>
        <article >
          <Animation  />
        </article>
      </section>
      <hr />
      <section className="measures ">
        <article className="p-4">
          <p  data-aos="fade-up" className="text-center text-2xl font-bold mt-6 md:text-3xl">
            Medidas de Servicios
          </p>
          <p  data-aos="fade-up" className="text-center text-sm text-slate-500 mx-2 my-3 md:mx-9 md:text-lg">
            Estamos dedicados a nuestros clientes. Trabajamos estrechamente con
            nuestros clientes para identificar sus objetivos comerciales. Además
            de brindar los servicios que se enumeran a continuación, también
            brindaremos soporte continuo.
          </p>
        </article>
        <article>
          <Card />
        </article>
      </section>
      <section className="wrapper text-center py-24 grid md:grid-cols-2">
        <article className="px-10">
          <p className="text-2xl font-bold text-center" data-aos="zoom-in">
            Los negocios repetidos provienen de clientes satisfechos.
          </p>
          <p className="mt-2 text-lg text-justify text-slate-500" data-aos="zoom-in">
            Cuando contrata a ArtxiDev, le prometemos que le brindaremos
            resultados galardonados. Un cliente satisfecho es un cliente
            recurrente. En ArtxiDev damos una alta prioridad a la satisfacción
            de nuestros clientes.
          </p>
        </article>
        <article className="flex justify-center" data-aos="zoom-in">
          <img src={introImage} className="w-min md:order-1 mt-7 md:mt-0" />
        </article>
      </section>
      <section className="home-section pb-6">
        <article className="prueba py-6 px-10">
          <p className=" font-bold text-2xl text-center text-white">
            ¿Por que elegir ArtxiDev?
          </p>
          <p className="mt-2 text-lg text-justify text-white md:px-36">
            Nuestra empresa ofrece servicios de desarrollo web en todo el mundo.
            Cumpliremos con sus requisitos con resultados galardonados gracias a
            nuestro fuerte compromiso. Nuestros expertos en desarrollo web
            maximizarán su negocio. Su satisfacción es nuestra máxima prioridad.
          </p>
        </article>
        <article className=" shadow-lg bg-white rounded-sm  grid md:grid-cols-2 mt-12 mx-8 md:mt-12 md:mx-28">
          <div className=" p-6 flex flex-col justify-center items-center">
            <img src={supportImage} alt="Support" className="support-image" />
            <p className="font-bold text-center text-lg">
              Soporte 24 horas al día, 7 días a la semana{" "}
            </p>
            <p className="text-center text-sm">
              Como equipo de atención al cliente, permanecemos enfocados y
              alerta para ayudar a nuestros valiosos clientes que necesitan
              asistencia técnica.{" "}
            </p>
          </div>
          <div className="p-6 flex flex-col justify-center items-center">
            <img src={qualityImage} alt="quality" className="quality-image" />
            <p className="font-bold text-center text-lg">
              Salida de máxima calidad
            </p>
            <p className="text-center text-sm">
              Puede contar con nosotros para brindarle un trabajo de calidad.
              ArtxiDev garantiza entregarle un trabajo de gran calidad.
            </p>
          </div>
        </article>
      </section>

      <section className="mt-12 px-10 ">
        <article>
          <p className="font-bold text-center text-xl p-4" data-aos="fade-up">
            Proceso de desarrollo de sitios web y aplicaciones web en ArtxiDev
          </p>
          <p className="mt-2 text-lg text-justify text-slate-500" data-aos="zoom-in">
            Las necesidades y seguridad de cada negocio son diferentes. ArtxiDev
            se siente orgulloso de ofrecer estos servicios a nuestros clientes.
          </p>
        </article>
        <article className="grid md:grid-cols-2">
          <div className="flex justify-center pb-4" data-aos="zoom-in">
            <img src={humanImage} alt="humaans image" className="human-image" />
          </div>
          <div>
            <div className="flex flex-col md:flex-row md:mt-10" data-aos="zoom-in">
              <img src={rocket} alt="rocket-image" className="icon-set" />
              <div className="-mt-5 mx-2">
                <div>
                  <p className="font-bold  text-xl">Rápido y seguro</p>
                  <p className="text-justify text-slate-500">
                    Siempre creamos sitios web rápidos y seguros porque la
                    optimización de la velocidad es el pilar de un sitio web
                    saludable.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 flex flex-col md:flex-row md:mt-7" data-aos="zoom-in">
              <img src={phone} alt="phone-image" className="icon-set"  />
              <div className="-mt-5 mx-2">
                <div>
                  <p className="font-bold  text-xl">Documentación y formación</p>
                  <p className="text-justify text-slate-500">
                  Proporcionamos documentación adecuada y formación básica a nuestros clientes. Luego, podrán mantener y actualizar sus sitios en el futuro fácilmente.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-3 flex flex-col md:flex-row md:mt-10" data-aos="zoom-in">
              <img src={books} alt="books-image" className="icon-books" />
              <div className="-mt-9 md:-mt-5 mx-2">
                <div>
                  <p className="font-bold  text-xl">Responsivo y duradero</p>
                  <p className="text-justify text-slate-500">
                  A largo plazo mientras trabajamos en cualquier proyecto para evitar problemas técnicos debido a los cambios en la tecnología día a día. Creamos sitios web con un diseño responsivo al que se puede acceder fácilmente desde cualquier dispositivo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className="home-section mt-20">
        <article className="py-6 px-4">
          <p className="font-bold text-white text-2xl text-center">Obtenga asesoría gratuita</p>
          <p className="mt-6 text-white text-sm text-center">No importa el estado de su sitio web, envíe un mensaje ahora mismo y obtenga asesoramiento gratuito. ( Estamos disponibles )</p>
        </article>
        <article className="flex justify-center py-10">

        <Link to="/contactanos" className="btn-start w-1/2 md:w-1/4">
            Empezar ahora
          </Link>
        </article>
     
      </section>
      <section className="mt-12">
      <article className="py-6 px-4">
          <p className="font-bold text-2xl text-center">Conoce más sobre nuestros servicios </p>
          <p className="mt-6 text-sm text-center">Conoce que tipos de servicios ofrecemos y descubre como podemos impulsar la eficiencia y la innovación de tu negocio hoy mismo.</p>
        </article>
        <article className="flex justify-center py-10">

        <Link to="/servicios" className="btn-start w-1/2 md:w-1/4">
            Conocer servicios
          </Link>
        </article>
      </section>
    </>
  );
};
