import React, { useState } from 'react';
import { Formulario } from './formulario/Formulario';
import { Menu } from './menu/Menu';
import './styles/style.css'

export const App = () => {
    const [aerolinea, setAerolinea] = useState('')
    return (
        <>
            <Menu setAerolinea = { setAerolinea } />
            {  
                aerolinea &&
                <Formulario 
                    aerolinea = { aerolinea }
                />
            }
        </>
    )
}
