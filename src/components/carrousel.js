import { Carousel } from 'react-bootstrap';
import './css/carrousel.css';
import frodas1 from '../assets/copayvarias.jpeg';
import frodas2 from '../assets/congeladas.jpg';
function Carrousel() {
    console.log('carrousel')
    return (

        <Carousel className='carrousel' >
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100 img"
                    src={frodas1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Ryan Fox</h3>
                    <p>Compra las variedades de cerveza y unite a Ryan fox & the beer gang.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100 img"
                    src={frodas2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Combo Frodas</h3>
                    <p>La mejor hamburguesa del AMBA.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}
export default Carrousel;