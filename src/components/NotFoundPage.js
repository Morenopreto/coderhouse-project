import React from 'react';
import PanArriba from '../assets/PanArriba.png';
import PanAbajo from '../assets/PanAbajo.png';

const NotFoundPage = () => {

    return (
        <div className="loading">
            <img className="arriba tamano" src={PanArriba} alt="loadingImg" />
            <h1>404 Burger Not Found <span>.</span><span>.</span><span>.</span></h1>
            <img className="abajo tamano" src={PanAbajo} alt="loadingImg" />
        </div>
    );
}

export default NotFoundPage;