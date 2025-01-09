import React from 'react';
import { useHistory, useLocation } from 'react-router';


const Homepage = () => {
    const location = useLocation();
    const history = useHistory();

    console.log('We are in Route:', location.pathname); // '/about | /faqs'

    const navigate = (path) => {
        history.push(path);
    }

    const navigateProps = (path) => {
        history.push({
            pathname: path,
            search: '?online=true', // Query Params
            state: {
                online: true
            }
        });
    }

    return (
        <div>
            <h1>Pagina de Inicio</h1>
            <button onClick={() => navigateProps('/online-state')}>
                Ir al perfil de usuario con estado / Query Params
            </button>
            <button onClick={() => navigate('/profile')}>
                Ir al perfil de usuario
            </button>
        </div>
    );
}

export default Homepage;
