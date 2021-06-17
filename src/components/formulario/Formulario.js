import React, { useState } from 'react';
import { Form } from './Form';

export const Formulario = ({ aerolinea }) => {

    const [formValues, setFormValues] = useState({
        nombre: '',
        email: '',
        celular: '',
        edad: '',
        errorMail: false
    });
    
    return (
        <div className='container'>
            <div className='column-container' >
                <h1 className='mt-10 '> Hola Bienvenido, sabemos que quieres viajar con { aerolinea } </h1>
                <div className='w-100 column form__formulario mt-10'  >
                    <h2> Formulario de Contacto </h2>
                    <Form 
                        formValues = { formValues }
                        setFormValues = { setFormValues }
                    />
                </div>
            </div>  
             
            
        </div>
    )
}
