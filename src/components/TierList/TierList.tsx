import "./TierList.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setSTierHeroes,
  setATierHeroes,
  setBTierHeroes,
  setCTierHeroes,
  setDTierHeroes,
  clearAllTierHeroes,
} from "../../store/slices/tierlistSlice";
import { useDrop } from "react-dnd";
import HeroBox from "../HeroBox/HeroBox.tsx";

const TierList = () => {
  const sTier = useSelector((state) => state.tierlist.sTier);
  const aTier = useSelector((state) => state.tierlist.aTier);
  const bTier = useSelector((state) => state.tierlist.bTier);
  const cTier = useSelector((state) => state.tierlist.cTier);
  const dTier = useSelector((state) => state.tierlist.dTier);
  const dispatch = useDispatch();

  const handleDrop = (item, tier) => {
    const { hero } = item;
    console.log(`Dropped hero: ${hero.name} into tier: ${tier}`);
    switch (tier) {
      case "S":
        dispatch(setSTierHeroes(hero));
        break;
      case "A":
        dispatch(setATierHeroes(hero));
        break;
      case "B":
        dispatch(setBTierHeroes(hero));
        break;
      case "C":
        dispatch(setCTierHeroes(hero));
        break;
      case "D":
        dispatch(setDTierHeroes(hero));
        break;
      default:
        break;
    }
  };

  const [{ isOverS }, dropS] = useDrop(() => ({
    accept: "hero",
    drop: (item) => handleDrop(item, "S"),
    collect: (monitor) => ({
      isOverS: !!monitor.isOver(),
    }),
  }));

  const [{ isOverA }, dropA] = useDrop(() => ({
    accept: "hero",
    drop: (item) => handleDrop(item, "A"),
    collect: (monitor) => ({
      isOverA: !!monitor.isOver(),
    }),
  }));

  const [{ isOverB }, dropB] = useDrop(() => ({
    accept: "hero",
    drop: (item) => handleDrop(item, "B"),
    collect: (monitor) => ({
      isOverB: !!monitor.isOver(),
    }),
  }));

  const [{ isOverC }, dropC] = useDrop(() => ({
    accept: "hero",
    drop: (item) => handleDrop(item, "C"),
    collect: (monitor) => ({
      isOverC: !!monitor.isOver(),
    }),
  }));

  const [{ isOverD }, dropD] = useDrop(() => ({
    accept: "hero",
    drop: (item) => handleDrop(item, "D"),
    collect: (monitor) => ({
      isOverD: !!monitor.isOver(),
    }),
  }));

  function handleClearAllTiers() {
    dispatch(clearAllTierHeroes());
  }

  return (
    <section className="tierlist">
      <div className="tierlist__wrapper">
        <div className="tierlist__tier tierlist__tier_s">S</div>
        <div
          ref={dropS}
          className="tierlist__heroes"
          style={{ backgroundColor: isOverS ? "rgb(83, 83, 83)" : "#242424" }}
        >
          {sTier.map((tier) => {
            return <HeroBox key={tier.id} hero={tier} />;
          })}
        </div>
        <div className="tierlist__tier tierlist__tier_a">A</div>
        <div
          ref={dropA}
          className="tierlist__heroes"
          style={{ backgroundColor: isOverA ? "rgb(83, 83, 83)" : "#242424" }}
        >
          {aTier.map((tier) => {
            return <HeroBox key={tier.id} hero={tier} />;
          })}
        </div>
        <div className="tierlist__tier tierlist__tier_b">B</div>
        <div
          ref={dropB}
          className="tierlist__heroes"
          style={{ backgroundColor: isOverB ? "rgb(83, 83, 83)" : "#242424" }}
        >
          {bTier.map((tier) => {
            return <HeroBox key={tier.id} hero={tier} />;
          })}
        </div>
        <div className="tierlist__tier tierlist__tier_c">C</div>
        <div
          ref={dropC}
          className="tierlist__heroes"
          style={{ backgroundColor: isOverC ? "rgb(83, 83, 83)" : "#242424" }}
        >
          {cTier.map((tier) => {
            return <HeroBox key={tier.id} hero={tier} />;
          })}
        </div>
        <div className="tierlist__tier tierlist__tier_d">D</div>
        <div
          ref={dropD}
          className="tierlist__heroes"
          style={{ backgroundColor: isOverD ? "rgb(83, 83, 83)" : "#242424" }}
        >
          {dTier.map((tier) => {
            return <HeroBox key={tier.id} hero={tier} />;
          })}
        </div>
      </div>
      <button className="tierlist__clear-button" onClick={handleClearAllTiers}>Clear all tiers</button>
    </section>
  );
};

export default TierList;
