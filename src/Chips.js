import React, { useState } from "react";
import { Link } from 'react-router-dom';
import chipsImg from './chips.gif';

const Chips = () => {
  const [chips, setChips] = useState([]);

  const getChips = () => {
      const x = window.innerWidth * Math.random();
      const y = window.innerHeight * Math.random();
      setChips(items=>[...items, {x, y}]);
  };

  const chipsArr = chips.map((chip, i) => (
    <img src={chipsImg} alt="img" key={i} className="chip-img" style={{ top: `${chip.y}px`, left: `${chip.x}px` }}/>
  ));
  return (
    <div className="chips">
        <p>So far you have: {chips.length} bags</p>
        <button onClick={getChips}>More</button>
        <Link to="/">Go Back</Link>
        {chipsArr}
    </div>
)
}

export default Chips;


