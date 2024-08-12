import "./HeroesList.css";
import { Hero } from "../../types/Hero.ts";
import { RootState } from "../../store/store.ts";
import HeroBox from "../HeroBox/HeroBox.tsx";
import { useEffect } from "react";
import { heroes } from "../../heroes_data/heroes.ts";
import { useDispatch, useSelector } from "react-redux";
import { setHeroes } from "../../store/slices/heroesSlice.ts";


const HeroesList = () => {
  const heroesState = useSelector((state: RootState) => state.heroes.heroes);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchHeroes();
  }, []);

  async function fetchHeroes() {
    try {
      const heroList:Hero[] = await new Promise((resolve) => {  
        resolve(heroes);
      });

      const sortedHeroes = heroList.slice().sort((a: Hero, b: Hero) =>
        a.name_loc.localeCompare(b.name_loc)
      ); 
      dispatch(setHeroes(sortedHeroes));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section className="herolist">
      <div className="herolist__attr herolist__str">
        <div className="herolist__attr-box">
          <img src="/dota-tiermaker/attr_strength.png" alt="strength" className="herolist__attr-icon" />
          <h3 className="herolist__attr-name">Strength</h3>
        </div>
          <ul className="herolist__container">
            {heroesState?.map((h: Hero) => {
              return h.primary_attr === 0 ? (
                <HeroBox hero={h} key={h.name_loc} />
              ) : null;
            })}
          </ul>
      </div>

      <div className="herolist__attr herolist__str">
        <div className="herolist__attr-box">
          <img src="/dota-tiermaker/attr_agility.png" alt="agility" className="herolist__attr-icon" />
          <h3 className="herolist__attr-name">Agility</h3>
        </div>
        <ul className="herolist__container">
          {heroesState?.map((h: Hero) => {
            return h.primary_attr === 1 ? (
              <HeroBox hero={h} key={h.name_loc} />
            ) : null;
          })}
        </ul>
      </div>

      <div className="herolist__attr herolist__str">
        <div className="herolist__attr-box">
          <img src="/dota-tiermaker/attr_intelligence.png" alt="intelligence" className="herolist__attr-icon" />
          <h3 className="herolist__attr-name">Intelligence</h3>
        </div>
        <ul className="herolist__container">
          {heroesState?.map((h: Hero) => {
            return h.primary_attr === 2 ? (
              <HeroBox hero={h} key={h.name_loc} />
            ) : null;
          })}
        </ul>
      </div>

      <div className="herolist__attr herolist__uni">
        <div className="herolist__attr-box">
          <h3 className="herolist__attr-name">Universal</h3>
        </div>
        <ul className="herolist__container">
          {heroesState?.map((h: Hero) => {
            return h.primary_attr === 3 ? (
              <HeroBox hero={h} key={h.name_loc} />
            ) : null;
          })}
        </ul>
      </div>
    </section>
  );
};

export default HeroesList;
