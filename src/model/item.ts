import { Damage } from "./damage";
import { Mobile } from "./mobile";
import { Pool } from "./pool";
import { Room } from "./room";

export class Item {
  id = "";
  name = "";
  description = "";
  weight = 0;
  value = 0;
  durability = new Pool(100);
  location?: Room | Item | Mobile;

  wear?: Wear;
  container?: Container;
  weapon?: Weapon;

  getTotalWeight(): number {
    return (
      this.weight +
      (this.container
        ? [...this.container.contents].reduce((prev, curr) => prev + curr.getTotalWeight(), 0)
        : 0)
    );
  }

  canContain(item: Item) {
    if (!this.container) {
      return false;
    }

    let parent = this.location;
    while (parent instanceof Item) {
      if (parent === item) {
        return false;
      }
      parent = parent.location;
    }
    if (this.container.contents.size >= this.container.maxItems) {
      return false;
    }
    if (this.getTotalWeight() + item.getTotalWeight() > this.container.maxWeight) {
      return false;
    }
    return true;
  }
}

export const WEAR_SLOTS = ["head", "neck", "back", "face", "eyes"] as const;
export type WearSlot = (typeof WEAR_SLOTS)[number];

export class Wear {
  slots = new Set<WearSlot>();

  overlaps(other?: Wear) {
    if (!other) {
      return false;
    }
    return [...other.slots.values()].some((value) => this.slots.has(value));
  }
}

export class Contents extends Set<Item> {
  weight = 0;

  add(item: Item): this {
    if (!this.has(item)) {
      this.weight = this.weight + item.getTotalWeight();
    }
    return super.add(item);
  }

  delete(value: Item): boolean {
    const result = super.delete(value);
    if (result) {
      this.weight = this.weight - value.getTotalWeight();
    }
    return result;
  }
}

export class Container {
  contents = new Set<Item>();
  maxItems = 0;
  maxWeight = 0;
}

export class Weapon {
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
