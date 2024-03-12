import "../styles/Card.css";
import Aos  from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react';

export const Card = () => {

  useEffect(() => {
    Aos.init({duration:2000})
  },[]);
  return (
    <>
      <article className="card-container">
     
      {/* Card 1*/}
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow card dark:border-gray-700"  data-aos="zoom-in">
          <a href="#">
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
            Personalización del tema
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Personalizamos los temas según sus objetivos comerciales y sus ideas.
          </p>
      
        </div>
        
      {/* Card 2 */}
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow card dark:border-gray-700" data-aos="zoom-in">
          <a href="#">
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
            Creación de proyectos
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Nuestro equipo creará un proyecto adaptado a su negocio, emprendimiento o industria.
          </p>
   
        </div>
      </article>
    </>
  );
};
