import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = ({guardarCategoria}) => {

    // Creamos las opciones de las categorias de NewsAPI que usaremos en el proyecto
    const OPCIONES = [
        { value: 'technology', label: 'Tecnología' },
        { value: 'business', label: 'Negocios' },
        { value: 'general', label: 'General' },
        { value: 'entertainment', label: 'Entreteniento' },
        { value: 'science', label: 'Ciencia' },
        { value: 'sports', label: 'Deportes' }
    ]

    // Utilizar custom hooks
    const [categoria, SelectNoticias] = useSelect('technology', OPCIONES);

    // cuando el usuario haga un submit pasara la categoria al App.js
    const buscarNoticias = e => {
        e.preventDefault();

        guardarCategoria(categoria);
    }

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra noticias por categoría</h2>
                    
                    <SelectNoticias />

                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Formulario;