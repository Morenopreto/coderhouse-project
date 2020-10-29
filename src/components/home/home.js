import React from 'react';
import './home.css';
import ItemList from './itemList/itemList'

const Home = (props) => {
    return (
        <div className='home-div'>
            <p>{props.greeting}</p>
            <div className="itemListDiv">
            <ItemList/>
            </div>
        </div>
    )
}
export default Home;


