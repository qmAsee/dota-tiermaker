import "./TierList.css";
import { RootState } from "../../store/store.ts";
import { Hero } from "../../types/Hero.ts";
import { useDispatch, useSelector } from "react-redux";
import {
  setSTierHeroes,
  setATierHeroes,
  setBTierHeroes,
  setCTierHeroes,
  setDTierHeroes,
  clearAllTierHeroes,
} from "../../store/slices/tierlistSlice.ts";
import { Tier } from "../../types/ChooseTierMenu.ts";
import { useDrop } from "react-dnd";
import { useRef } from "react";
import html2canvas from "html2canvas";
import HeroBox from "../HeroBox/HeroBox.tsx";

interface DropItem {
  hero: Hero;
}

const TierList = () => {
  const tierlistRef = useRef<HTMLDivElement>(null);
  const copyButtonRef = useRef<HTMLButtonElement>(null)

  const sTier = useSelector((state: RootState) => state.tierlist.sTier);
  const aTier = useSelector((state: RootState) => state.tierlist.aTier);
  const bTier = useSelector((state: RootState) => state.tierlist.bTier);
  const cTier = useSelector((state: RootState) => state.tierlist.cTier);
  const dTier = useSelector((state: RootState) => state.tierlist.dTier);
  const dispatch = useDispatch();

  const handleDrop = (item: DropItem, tier: Tier) => {
    console.log(item)
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
    drop: (item: DropItem) => handleDrop(item, "S"),
    collect: (monitor) => ({
      isOverS: !!monitor.isOver(),
    }),
  }));

  const [{ isOverA }, dropA] = useDrop(() => ({
    accept: "hero",
    drop: (item: DropItem) => handleDrop(item, "A"),
    collect: (monitor) => ({
      isOverA: !!monitor.isOver(),
    }),
  }));

  const [{ isOverB }, dropB] = useDrop(() => ({
    accept: "hero",
    drop: (item: DropItem) => handleDrop(item, "B"),
    collect: (monitor) => ({
      isOverB: !!monitor.isOver(),
    }),
  }));

  const [{ isOverC }, dropC] = useDrop(() => ({
    accept: "hero",
    drop: (item: DropItem) => handleDrop(item, "C"),
    collect: (monitor) => ({
      isOverC: !!monitor.isOver(),
    }),
  }));

  const [{ isOverD }, dropD] = useDrop(() => ({
    accept: "hero",
    drop: (item: DropItem) => handleDrop(item, "D"),
    collect: (monitor) => ({
      isOverD: !!monitor.isOver(),
    }),
  }));

  function handleClearAllTiers() {
    dispatch(clearAllTierHeroes());
  }

  const copyToClipboard = async () => {
    if (copyButtonRef.current) {
      copyButtonRef.current.style.backgroundColor = "rgb(203, 255, 203)";
      copyButtonRef.current.textContent = "Copied!";
    }
    if (tierlistRef.current) {
      try {
        // Создание canvas из элемента
        const canvas = await html2canvas(tierlistRef.current);
        // Преобразование canvas в Blob
        canvas.toBlob(async (blob) => {
          if (blob) {
            
            // Создание DataTransfer для хранения изображения
            const data = new ClipboardItem({ 'image/png': blob });
            // Использование Clipboard API для копирования
            await navigator.clipboard.write([data]);
            
            
            }
        });
      } catch (error) {
        console.error('Ошибка копирования в буфер обмена: ', error);
      } finally {
        setTimeout(() => {
          if (copyButtonRef.current) {
            copyButtonRef.current.style.backgroundColor = "";
            copyButtonRef.current.textContent = "Copy as image";
          }
        }, 2000)
      }
    }
  };

  return (
    <section className="tierlist">
      <div ref={tierlistRef} className="tierlist__wrapper">
        <div className="tierlist__tier tierlist__tier_s">S</div>
        <div
          ref={dropS}
          className="tierlist__heroes"
          style={{ backgroundColor: isOverS ? "rgb(83, 83, 83)" : "#242424" }}
        >
          {sTier.map((hero: Hero) => {
            return <HeroBox key={hero.id} hero={hero} />;
          })}
        </div>
        <div className="tierlist__tier tierlist__tier_a">A</div>
        <div
          ref={dropA}
          className="tierlist__heroes"
          style={{ backgroundColor: isOverA ? "rgb(83, 83, 83)" : "#242424" }}
        >
          {aTier.map((hero: Hero) => {
            return <HeroBox key={hero.id} hero={hero} />;
          })}
        </div>
        <div className="tierlist__tier tierlist__tier_b">B</div>
        <div
          ref={dropB}
          className="tierlist__heroes"
          style={{ backgroundColor: isOverB ? "rgb(83, 83, 83)" : "#242424" }}
        >
          {bTier.map((hero: Hero) => {
            return <HeroBox key={hero.id} hero={hero} />;
          })}
        </div>
        <div className="tierlist__tier tierlist__tier_c">C</div>
        <div
          ref={dropC}
          className="tierlist__heroes"
          style={{ backgroundColor: isOverC ? "rgb(83, 83, 83)" : "#242424" }}
        >
          {cTier.map((hero: Hero) => {
            return <HeroBox key={hero.id} hero={hero} />;
          })}
        </div>
        <div className="tierlist__tier tierlist__tier_d">D</div>
        <div
          ref={dropD}
          className="tierlist__heroes"
          style={{ backgroundColor: isOverD ? "rgb(83, 83, 83)" : "#242424" }}
        >
          {dTier.map((hero: Hero) => {
            return <HeroBox key={hero.id} hero={hero} />;
          })}
        </div>
      </div>
      <div className="tierlist__buttons">
        <button className="tierlist__button tierlist__button_clear" onClick={handleClearAllTiers}>Clear all tiers</button>
        <button className="tierlist__button tierlist__button_copy" onClick={copyToClipboard} ref={copyButtonRef}>Copy as image</button>
      </div>
      </section>
  );
};

export default TierList;
