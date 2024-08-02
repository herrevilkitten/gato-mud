import { Item } from "./item";
import { Pool } from "./pool";

export class Mobile {
  id = "";
  name = "";
  description = "";
  wearing = new Set<Item>();
  health = new Pool(100);
  mana = new Pool(100);
  stamina = new Pool(100);

  canWear(item: Item) {
    if (!item.wear) {
      return false;
    }
    return [...this.wearing.values()].every((wearing) => !wearing.wear?.overlaps(item?.wear));
  }

  wear(item: Item) { }
}

export class MobilePrototype {}
