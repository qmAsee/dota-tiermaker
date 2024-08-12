export type Tier = "S" | "A" | "B" | "C" | "D";

type OnChooseTier = (tier: Tier) => void;
type OnRemoveHero = () => void;

export type ChooseTierMenuProps = {
    onChooseTier: OnChooseTier;
    onRemoveHero: OnRemoveHero;
};

