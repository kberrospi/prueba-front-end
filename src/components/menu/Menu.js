import React from 'react'
import { data } from '../helpers/data';

export const Menu = ({ setAerolinea }) => {

    return (
        <>   
            <ul className="topnav" > 
                {
                    data.map(({ name, id }) => {
                        return(
                            <li key={id} id={name}>
                                <span className='w-100 h-100' onClick={() => setAerolinea(name)}> 
                                    { name } 
                                </span> 
                            </li>
                        )
                    })
                }
            </ul> 
        
        </>
        
        

    )
}
