import React from 'react';
import Producto from "./Producto";
import './carrito.css';

const Carrito = ({carrito,agregarProducto}) => {
    return (
        <div className="carrito">
            <h2>
                Tu Carrito de Compras
            </h2>
            {carrito.length === 0
                ?
                <p>No hay elementos en el carrito</p>
                :
                carrito.map(producto => (
                    <Producto
                        key={producto.idcarrito}
                        producto={producto}
                        carrito={carrito}
                        agregarProducto={agregarProducto}
                    />
                ))
            }
        </div>
    );
};

export default Carrito;