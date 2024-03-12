import { Formik } from "formik";
import { helpHttps } from "../helpers/helpHttps.js";
import {useState} from 'react';
import { Loader } from "./Loader.jsx";


export const Contact = () => {

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          subject: "",
          comments: "",
        }}
        validate={(valores) => {
          let errors = {};
          let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
          let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
          let regexComments = /^.{1,255}$/;

          if (!valores.name) {
            errors.name = "Por favor, ingresa tu nombre";
          } else if (!regexName.test(valores.name)) {
            errors.name = "Solo se permiten letras y espacios";
          }

          if (!valores.email) {
            errors.email = "Por favor, ingresa tu correo";
          } else if (!regexEmail.test(valores.email)) {
            errors.email = "Error de correo";
          }
          if (!valores.subject) {
            errors.subject = "Por favor, ingresa el asunto del mensaje";
          }
          if (!valores.comments) {
            errors.comments = "Por favor, ingresa tu mensaje";
          } else if (!regexComments.test(valores.comments)) {
            errors.comments = "No deben pasar de 255 caracteres";
          }

          return errors;
        }}

        onSubmit = {(valores,{resetForm})=>{
          setLoading(true);
          helpHttps()
            .post("https://formsubmit.co/ajax/said557@outlook.es", {
              body: valores,
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            })
            .then(() => {
              setLoading(false);
              resetForm();
             
            })
            .finally(() => {
              setMessage(true);
            });
        }}
      >
       {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
    
        }) => (
         
          <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="name"
                >
                  Nombre
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:red-purple-500"
                  id="name"
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                 {touched.name && errors.name && (
              <p className="error text-xs text-orange-700">{errors.name}</p>
            )}
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="email"
                >
                  Correo
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
                  id="email"
                  type="text"
                  name="email"
                  placeholder="email@ejemplo.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                  {touched.email && errors.email && (
              <p className="error text-xs text-orange-700">{errors.email}</p>
            )}
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="subject"
                >
                  Asunto
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
                  id="subject"
                  name="subject"
                  type="text"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                 {touched.subject && errors.subject && (
              <p className="error text-xs text-orange-700">{errors.subject}</p>
            )}
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="comments"
                >
                  Mensaje
                </label>
              </div>
              <div className="md:w-2/3">
                <textarea
                  id="comments"
                  name="comments"
                  rows="4"
                  className="bg-gray-200 resize-none appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
                  value={values.comments}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                
                />
                   {touched.comments && errors.comments && (
              <p className="error text-xs text-orange-700">{errors.comments}</p>
            )}   
                
              </div>
            </div>

           
            <div className="mb-20 md:flex md:ml-20 md:items-center md:flex-col" >
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3 ">
                 {loading ?<Loader />
                 : (
                 <input
                  className="shadow  bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit" value="Enviar" 
                />)
                 }
              </div>
                {message && (
              <p className="text-sm  mt-5 font-semibold text-emerald-400">Tu mensaje se ha enviado correctamente, pronto nos pondremos en contacto contigo.</p>
                )}
            </div>
          </form>
          )}
      </Formik>
    </>
  );
};
