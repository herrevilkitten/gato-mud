import { Room } from "./room";

export const DIRECTIONS = [
  "north",
  "south",
  "east",
  "west",
  "up",
  "down",
  "enter",
  "exit",
] as const;
export type Direction = (typeof DIRECTIONS)[number];

export class Exit {
  direction: Direction = "north";
  description = "";
  destination?: Room;
}
