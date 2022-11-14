import React from "react";
import Navbar from "../components/Navbar";
import Slider from '../components/Slider'
import Products from '../components/Products'
import Newsletter from "../components/Newsletter";

const Home = () => {
    return(
        <div className="container">
            <Navbar/>
            <Slider/>
            <Newsletter/>
        </div>
    )
}

export default Home