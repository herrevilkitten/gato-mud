import { Dice } from "./dice";

export const DAMAGE_TYPES = [
  "other",
  "heat",
  "cold",
  "electicity",
  "acid",
  "sonic",
] as const;
export type DamageType = (typeof DAMAGE_TYPES)[number];

export interface Damage {
  type: DamageType;
  amount: Dice;
}