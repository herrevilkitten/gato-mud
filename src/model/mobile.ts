import { Item, WearSlot } from "./item";
import { Pool } from "./pool";

export class Mobile {
  id = "";
  name = "";
  description = "";
  health = new Pool(100);
  mana = new Pool(100);
  stamina = new Pool(100);

  wearing = new Map<WearSlot, Item>();

  canWear(item: Item) {
    if (!item.wear) {
      return false;
    }
    return [...item.wear.slots].every((slot) => !this.wearing.has(slot));
  }

  wear(item: Item) {
    if (!item.wear) {
      return;
    }
    if (!this.canWear(item)) {
      return;
    }
    item.location = this;
    for (const slot of item.wear.slots) {
      this.wearing.set(slot, item);
    }
  }

  remove(item: Item) {
    if (!item.wear) {
      return;
    }
    if (item.location !== this) {
      return;
    }
    for (const slot of item.wear.slots) {
      this.wearing.delete(slot);
    }
  }
}

export class MobilePrototype {}
