import Swal from 'sweetalert2';

export const sendForm = (e, values, setFormValues) => {
    e.preventDefault();
    const { nombre, email, celular, edad, errorMail } = values;

    if(!nombre ) { alertas('Por favor escribe tu nombre.'); return false };
    if(errorMail || !email){ alertas('Por favor escribe un email correcto'); return false }
    if(!celular || celular<0) { alertas('Por favor escribe tu numero de celular.'); return false}
    if(!edad){ alertas('Por favor selecciona tu edad'); return false }
    
    console.log(
        'Datos Formulario:', '\n',
        'Nombre:', nombre, '\n',
        'Email:', email, '\n',
        'Celular:', celular, '\n',
        'Edad:', edad
    );
    
    lighbox();

    setFormValues({
        nombre: '',
        email: '',
        celular: '',
        edad: ''
    })

}
 
export const validarTexto = (value, setFormValues, formValues) => {
    const regex = new RegExp('^[ñíóáéú a-zA-Z ]+$');
    
    ((regex.test(value) || !value) &&
    setFormValues({ ...formValues, nombre: value }));

}

export const validarEmail = (value, setFormValues, formValues, event) => {
    event.preventDefault();
    const regex = new RegExp(/^\w+([\w.-]?\w+)*@\w+([\w.-]?\w+)*(\.\w{2,4})+$/);

    ((regex.test(value) || !value) ?
        setFormValues({ ...formValues, errorMail: false })
    : setFormValues({ ...formValues, errorMail: true })
    )

}

const alertas = (text) => {
    Swal.fire({
        title:'Advertencia',
        text,
        icon: 'warning',
        confirmButtonColor: '#4345C1'
    })
    
}

const lighbox = () => {

    Swal.fire({
        title: 'Éxito!',
        icon: 'success',
        html: 'Tu información fue enviada con éxito, estaremos en contacto contigo.',
        timer: 5000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
        },
    })
}