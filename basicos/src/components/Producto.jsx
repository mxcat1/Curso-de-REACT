import React from 'react';

const Producto = ({producto,carrito,agregarProducto,productos}) => {
    const {nombre,precio,id}=producto;

    //Agregar producto al carrito

    //Nota arreglar para q pueda poner mas de dos veces el mismo producto
    const seleccionarProducto = id =>{
        let productose = productos.filter(producto => producto.id === id)[0];
        let newId=(Math.floor(Math.random()*(100-1)+1));
        productose.idcarrito=newId;
        agregarProducto([
            ...carrito,
            productose
        ]);
    };
    //Eliminar producto del carrito
    const eliminarProducto = id =>{
        const productos = carrito.filter(producto => producto.id!==id);
        agregarProducto(productos);
    };

    return (
        <div>
            <h2>{nombre}</h2>
            <p>S/.{precio}</p>

            {
                productos
                ?
                    (
                    <button
                        type="button"
                        onClick={()=> seleccionarProducto(id)}
                    >
                        {/*<button type="button" onClick={seleccionarProducto}>*/}
                        Comprar
                    </button>
                    )
                :
                    (
                        <button
                            type="button"
                            onClick={() => eliminarProducto(id)}
                        >
                            Eliminar
                        </button>
                    )
            }
        </div>
    );
};

export default Producto;