import PanArriba from '../assets/PanArriba.png';
import PanAbajo from '../assets/PanAbajo.png';
import burger from '../assets/burgerCheddar.png';
import bacon from '../assets/bacon.png';
import cebolla from '../assets/cebolla.png';
import './css/loading.css';


function Loading() {
    return (
        <div className="loading">
            <img className="arriba tamano" src={PanArriba} alt="loadingImg" />
            <img className="cebolla" src={cebolla} alt="loadingImg" />
            <img className="burger tamano" src={burger} alt="loadingImg" />
            <img className="bacon" src={bacon} alt="loadingImg" />
            <img className="abajo tamano" src={PanAbajo} alt="loadingImg" />
        </div>
    )

}
export default Loading;