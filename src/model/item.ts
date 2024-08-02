import { Damage } from "./damage";
import { Pool } from "./pool";
import { Room } from "./room";

export class Item {
  id = "";
  name = "";
  weight = 0;
  durability = new Pool(100);
  location?: Room | Item;

  container?: Container;

  getTotalWeight(): number {
    return (
      this.weight +
      (this.container
        ? [...this.container.contents].reduce(
            (prev, curr) => prev + curr.getTotalWeight(),
            0
          )
        : 0)
    );
  }

  canBePlacedIn(target: Item) {
    if (!target.container) {
      return false;
    }
    let parent = this.location;
    while (parent instanceof Item) {
      if (parent === target) {
        return false;
      }
      parent = parent.location;
    }
    return true;
  }
}

export class Container {
  contents = new Set<Item>();
  maxItems = 0;
  maxWeight = 0;
}

export class Weapon extends Item {
  damages: Damage[] = [];
}

export const ITEM_TYPES = ["junk", "container"] as const;
export type ItemType = (typeof ITEM_TYPES)[number];

export interface ItemPrototype {
  type: ItemType;

  container?: {
    maxItems: number;
    maxWeight: number;
  };
}
