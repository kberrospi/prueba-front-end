import React, { useEffect, useState } from 'react'
import { sendForm, validarEmail, validarTexto } from '../helpers/handleFormulario';
import iconForm from '../../media/formIcon.svg'

export const Form = ({ formValues, setFormValues }) => {

    const [rangoEdad, setRangoEdad] = useState([]);
    const { nombre, email, celular, edad, errorMail } = formValues

    useEffect(() => {
        const edad = [];
        for(let i = 18; i<= 100; i++){
            edad.push(i);
        }
        setRangoEdad(edad);
    }, [])

    return (
        <form className='column form' onSubmit={(e) => sendForm(e, formValues, setFormValues)} >
            <img src={iconForm} className='form__icon mt-10 mb-10' alt='contacto' />
            <input
                name='nombre'
                className='form__input'
                placeholder='Nombre Completo'
                type='text'
                autoComplete='off'
                value={nombre || ''}
                onChange={(e) => validarTexto(e.target.value, setFormValues, formValues)}

            />
            <input
                name='email'
                className='form__input'
                placeholder='Email'
                type='email'
                autoComplete='off'
                value={email || ''}
                onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                onBlur={(event) => validarEmail(email, setFormValues, formValues, event)}
            />
            { errorMail && <div className='form__error'> <span > Email incorrecto </span></div>}
            <input
                name='celular'
                className='form__input'
                placeholder='Celular'
                type='number'
                autoComplete='off'
                value={celular || ''}
                onChange={(e) => setFormValues({ ...formValues, celular: e.target.value })}
                onWheel={(e) => e.target.blur()}
            />
            <select
                className='form__input'
                name='edad'
                value={edad || ''}
                onChange={(e) => setFormValues({ ...formValues, edad: e.target.value })}
            >
                <option value=''>Escoge tu edad</option>
                {
                    rangoEdad.length > 0 &&
                    rangoEdad.map((edad) => {
                        return (
                            <option key={edad}>
                                {edad}
                            </option>
                        )
                    })
                }
            </select>
            { !edad && <div className='form__error'> <span > Por favor selecciona tu edad. </span></div>}
            <button className='form__btn-primary mb-5' type='submit' >
                Enviar
                        </button>
        </form>
    )
}
