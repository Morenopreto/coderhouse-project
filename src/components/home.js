import React from 'react';
import './css/home.css';
// import ItemList from './itemList'
import Carrousel from './carrousel'
console.log('home')

const Home = () => {
    return (
        <div className='home-div'>
            <div className="back"></div>
            <Carrousel/>
            <div className="itemListDiv">
            </div>
        </div>
    )
}
export default Home;


