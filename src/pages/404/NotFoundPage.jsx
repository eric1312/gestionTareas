import React from 'react';
import { useHistory } from 'react-router-dom';

const Notfoundpage = () => {

    const history = useHistory();

    const navigateTo = (path) => {
        history.push(path);
    }

    return (
        <div>
            <h1>404 - Pagina no encontrada </h1>
            <button onClick={() => navigateTo('/')}>
                Volver al Inicio
            </button>
        </div>
    );
}

export default Notfoundpage;
