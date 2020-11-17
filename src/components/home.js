import React from 'react';
import './css/home.css';
import ItemList from './itemList'

const Home = (props) => {
    return (
        <div className='home-div'>
            <p>{props.greeting}</p>
            <div className="itemListDiv">
            </div>
        </div>
    )
}
export default Home;


