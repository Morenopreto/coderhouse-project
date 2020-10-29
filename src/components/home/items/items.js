import React from 'react';
import ItemCount from '../itemCount/itemCount';
import './items.css';

class Item extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="item-div">
                <ul className="itemUl">
                    <li>id: {this.props.id}</li>
                    <li>name: {this.props.name}</li>
                    <li>price: {this.props.price}$</li>
                </ul>
                <ItemCount  max={this.props.max} min={this.props.min} initial={this.props.initial}  />
            </div>
        )
    }
}
export default Item;