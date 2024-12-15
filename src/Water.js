import React, { useState } from "react";
import { Link } from 'react-router-dom';
import waterImg from './water.jpeg';

const Water = () => {
    const [waters, setWaters] = useState([]);

    const getWater = () => {
        const x = window.innerWidth * Math.random();
        const y = window.innerHeight * Math.random();
        setWaters(items=>[...items, {x, y}]);
    }

    const waterImgs = waters.map((bottle, i) => (
        <img src={waterImg} alt="img" key={i} className="water-img" style={{ top: `${bottle.y}px`, left: `${bottle.x}px` }}/>
    ));
    
    return (
        <div className="water">
            <div className="water-card">
                <p>So far you have {waters.length} waters</p>
                <p>Buy another one?</p>
                <button onClick={getWater}>More</button>
                <Link to="/">Go Back</Link>
                {waterImgs }
            </div>
        </div>
    );
}

export default Water;