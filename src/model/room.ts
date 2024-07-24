import { Direction, Exit } from "./exit";
import { Item } from "./item";
import { Mobile } from "./mobile";

export class Room {
  id = "";
  description = "";

  readonly exits = new Map<Direction, Exit>();
  readonly people = new Set<Mobile>();
  readonly contents = new Set<Item>();
}
