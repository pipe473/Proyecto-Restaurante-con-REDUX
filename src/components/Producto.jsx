import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

// Redux
import { useDispatch } from 'react-redux';
import { borrarProductoAction, obternerProductoEditar } from '../actions/productoActions';

const Producto = ({producto}) => {
    const { nombre, precio, id } = producto;

    const dispatch = useDispatch();
    const history = useHistory(); // habilitar history para la redirección

    // Confirmar si desea eliminarlo
    const confirmarEliminarProducto = id => {

        // Preguntar al usuario
        Swal.fire({
            title: '¿Estas seguro...?',
            text: "Un producto eliminado, después no se podrá recuperar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, deseo eliminarlo!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {

                // Pasarlo al action
                dispatch( borrarProductoAction(id) );
             
            }
        })        
    }

    // Función que redirige de forma programada
    const redireccionarEdicion = producto => {
        dispatch(obternerProductoEditar(producto) );
        history.push(`/productos/editar/${producto.id}`);
    }

    return ( 
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold">{precio} €</span></td>
            <td className="acciones">
                <button 
                    type="button"
                    onClick={() => redireccionarEdicion(producto) }
                    className="btn btn-primary mr-2">
                    Editar
                </button>
                <button 
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmarEliminarProducto(id) }
                >Eliminar </button>
            </td>
        </tr>
     );
}
 
export default Producto;