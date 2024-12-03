import { Room } from "./room";

export const DIRECTIONS = ["north", "south", "east", "west", "up", "down", "in", "out"] as const;
export type Direction = (typeof DIRECTIONS)[number];

export class Exit {
  direction: Direction = "north";
  description = "";
  destination: string | Room = "";
}
