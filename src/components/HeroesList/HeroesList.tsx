import "./HeroesList.css";
import HeroBox from "../HeroBox/HeroBox.tsx";
import { useEffect, useState } from "react";
import { heroes } from "../../heroes_data/heroes";
import { useDispatch, useSelector } from "react-redux";
import { setHeroes } from "../../store/slices/heroesSlice";


const HeroesList = () => {
  const heroesState = useSelector((state) => state.heroes.heroes);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchHeroes();
  }, []);

  async function fetchHeroes() {
    try {
      const heroList = await new Promise((resolve, reject) => {
        resolve(heroes);
      });

      const sortedHeroes = heroList.sort((a, b) =>
        a.name_loc.localeCompare(b.name_loc)
      );
      dispatch(setHeroes(sortedHeroes));
    } catch (err) {
      console.log(err);
    }
  }

  console.log(heroesState[0]);

  return (
    <section className="herolist">
      <div className="herolist__attr herolist__str">
        <div className="herolist__attr-box">
          <img src="./src/assets/attr_strength.png" alt="strength" className="herolist__attr-icon" />
          <h3 className="herolist__attr-name">Strength</h3>
        </div>
          <ul className="herolist__container">
            {heroesState[0]?.map((h) => {
              return h.primary_attr === 0 ? (
                <HeroBox hero={h} key={h.name_loc} />
              ) : null;
            })}
          </ul>
      </div>

      <div className="herolist__attr herolist__str">
        <div className="herolist__attr-box">
          <img src="./src/assets/attr_agility.png" alt="agility" className="herolist__attr-icon" />
          <h3 className="herolist__attr-name">Agility</h3>
        </div>
        <ul className="herolist__container">
          {heroesState[0]?.map((h) => {
            return h.primary_attr === 1 ? (
              <HeroBox hero={h} key={h.name_loc} />
            ) : null;
          })}
        </ul>
      </div>

      <div className="herolist__attr herolist__str">
        <div className="herolist__attr-box">
          <img src="./src/assets/attr_intelligence.png" alt="intelligence" className="herolist__attr-icon" />
          <h3 className="herolist__attr-name">Intelligence</h3>
        </div>
        <ul className="herolist__container">
          {heroesState[0]?.map((h) => {
            return h.primary_attr === 2 ? (
              <HeroBox hero={h} key={h.name_loc} />
            ) : null;
          })}
        </ul>
      </div>
    </section>
  );
};

export default HeroesList;
