import React from 'react';
import ItemDetailContainer from './itemDetailContainer/itemDetailContainer';
import ItemCount from './itemDetailContainer/itemCount/itemCount'
import './items.css';


class Item extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contadorDeClick: 0
        }
    }
    sumar = () => {
        if (this.state.contadorDeClick < this.props.max) {

            this.setState({ contadorDeClick: this.state.contadorDeClick + 1 })

        }
    }
    disminuir = () => {
        
        if (this.state.contadorDeClick > this.props.min)
            this.setState({ contadorDeClick: this.state.contadorDeClick - 1 })

    }


    render() {
        return (
            <div className="item-div">
                <ul className="itemUl">
                    <li>id: {this.props.id}</li>
                    <li>name: {this.props.name}</li>
                    <li>price: {this.props.price}$</li>
                </ul>
                <ItemCount disminuir={this.disminuir} sumar={this.sumar} contadorDeClick={this.state.contadorDeClick} max={this.props.max} min={this.props.min} initial={this.props.initial} />
                                            
                <ItemDetailContainer  disminuir={this.disminuir} sumar={this.sumar} detalle={this.props.detalle} max={this.props.max} min={this.props.min} contadorDeClick={this.state.contadorDeClick} name={this.props.name} price={this.props.price} />
            </div>
        )
    }
}
export default Item;