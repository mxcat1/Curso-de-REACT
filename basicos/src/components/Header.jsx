import React from 'react';

function Header({titulo}) {
    // const edad=18;
    // let mensaje;
    //
    // if (edad >= 18){
    //     mensaje='Eres mayor de edad'
    // }else {
    //     mensaje='Eres Menor de edad'
    // }

    return (
        // <h1>Desde El Header {mensaje}</h1>
        <h1 id="encabezado" className="encabezado">{titulo}</h1>
    );
}

export default Header;