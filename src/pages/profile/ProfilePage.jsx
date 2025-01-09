import React from 'react';
import { useHistory } from 'react-router-dom';

const Profilepage = ({user}) => {

    const history = useHistory();

    const navigateTo = (path) => {
        history.push(path);
    }

    const goBack = () => {
        history.goBack()
    }


    return (
        <div>
            <h1>Tu perfil</h1>
            <button onClick={() => navigateTo('/tasks')}>Tareas</button>
            <button onClick={goBack}>Volver</button>
        </div>
    );
}

export default Profilepage;
