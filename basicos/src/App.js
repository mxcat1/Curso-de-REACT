import React,{Fragment,useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from "./components/Carrito";

function App() {

    //Listado de Productos
    const [productos, setProductos]=useState([
        {id: 1,nombre:'Camisa React.js',precio:50},
        {id: 2,nombre:'Camisa Vue.js',precio:40},
        {id: 3,nombre:'Camisa Svelte.js',precio:30}
    ]);

    //State para el Carrito de Compras
    const [carrito,agregarProducto] =useState([]);


    const fecha = new Date().getFullYear();
    return (
        <Fragment>
            <Header
                titulo="Tienda Virtual"
            />
            <h1>Lista de Productos</h1>
            {productos.map(producto => (
                <Producto
                    key={producto.id}
                    producto={producto}
                    carrito={carrito}
                    productos={productos}
                    agregarProducto={agregarProducto}
                />
            ))}

            <Carrito
                carrito={carrito}
                agregarProducto={agregarProducto}
            />
            <Footer
                fecha={fecha}
            />
        </Fragment>
    );
}

export default App;
