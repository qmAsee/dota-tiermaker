import './HeroBox.css'
import { Hero } from '../../types/Hero.ts';
import { Tier } from '../../types/ChooseTierMenu.ts'
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { useDrag } from 'react-dnd';
import {
  setSTierHeroes,
  setATierHeroes,
  setBTierHeroes,
  setCTierHeroes,
  setDTierHeroes,
  removeTierSHero,
  removeTierAHero,
  removeTierBHero,
  removeTierCHero,
  removeTierDHero, } from "../../store/slices/tierlistSlice.ts"
import ChooseTierMenu from '../ChooseTierMenu/ChooseTierMenu';

interface HeroBoxProps {
  hero: Hero;
}

const HeroBox: React.FC<HeroBoxProps> = ({ hero }) => {
  const [showMenu, setShowMenu] = useState(false)

  const dispatch = useDispatch();

  const [, drag] = useDrag(() => ({
    type: 'hero',
    item: { hero },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  function handleShowMenu() {
    setShowMenu(!showMenu)
  }

  function handleCloseMenu() {
    setShowMenu(false)
  }

  const handleTierSelection = (tier: Tier) => {
    switch (tier) {
      case 'S':
        dispatch(setSTierHeroes(hero));
        break;
      case 'A':
        dispatch(setATierHeroes(hero));
        break;
      case 'B':
        dispatch(setBTierHeroes(hero));
        break;
      case 'C':
        dispatch(setCTierHeroes(hero));
        break;
      case 'D':
        dispatch(setDTierHeroes(hero));
        break;
      default:
        break;
    }
    handleCloseMenu();
  };

  const handleRemoveHero = () => {
    dispatch(removeTierSHero(hero));
    dispatch(removeTierAHero(hero));
    dispatch(removeTierBHero(hero));
    dispatch(removeTierCHero(hero));
    dispatch(removeTierDHero(hero));
    handleCloseMenu(); 
  };

  return (
      <li ref={drag} onClick={handleShowMenu} onMouseLeave={handleCloseMenu} className="herobox__hero" key={hero.name}>
        <img className="herobox__icon" src={hero.image} />
        <h3 className="herobox__name">{hero.name_loc}</h3>
        {showMenu && (
        <div className="tiermenu">
          <ChooseTierMenu onChooseTier={handleTierSelection} onRemoveHero={handleRemoveHero} />
        </div>
      )}
      </li>
  );
}

export default HeroBox;
