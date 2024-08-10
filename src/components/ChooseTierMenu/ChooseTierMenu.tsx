import React from 'react';
import './ChooseTierMenu.css'

const ChooseTierMenu = ({onChooseTier, onRemoveHero}) => {
    return (
        <>
          <button className="tiermenu__choose tiermenu__choose_s" onClick={() => onChooseTier("S")}>S</button>
          <button className="tiermenu__choose tiermenu__choose_a" onClick={() => onChooseTier("A")}>A</button>
          <button className="tiermenu__choose tiermenu__choose_b" onClick={() => onChooseTier("B")}>B</button>
          <button className="tiermenu__choose tiermenu__choose_c" onClick={() => onChooseTier("C")}>C</button>
          <button className="tiermenu__choose tiermenu__choose_d" onClick={() => onChooseTier("D")}>D</button>
          <button className='tiermenu__remove' onClick={onRemoveHero}>Remove</button>
        </>
    );
};

export default ChooseTierMenu;