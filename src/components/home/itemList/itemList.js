import React from 'react'
import Item from '../items/items'
import './itemList.css';


class ItemList extends React.Component {
    constructor() {
        super()
        this.state = {
            lista: []
        }
    }
    creaLista(){
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    { 'id': 1, 'price': 200, 'name': "Remera barata", 'max': 3, 'min': 1, 'initial': 0 },
                    { 'id': 2, 'price': 500, 'name': "Remera medio" , 'max': 4, 'min': 2, 'initial': 0},
                    { 'id': 3, 'price': 1200, 'name': "Remera cara" , 'max': 7, 'min': 3, 'initial': 0}])
            }, 2000)

        })
            .then(response => {
                this.setState({ lista: response })
            })
            .catch(err => { console.log(err) })
    }
    componentDidMount() {
        this.creaLista()      
        
    }
    render() {
        
        return (
            
                <ul className="itemListUl">
                    {this.state.lista.map((item,key) => (
                        (<Item key={key} id={item.id} name={item.name} price={item.price} max={item.max} min={item.min} initial={item.initial}  />)
                    ))}
                </ul>
            

        )
    }
}
export default ItemList;