import { Item, ItemPrototype } from "./item";
import { Mobile, MobilePrototype } from "./mobile";
import { Room } from "./room";

export class Area {
  id = "";
  name = "";
  description = "";
  source?: URL;

  rooms = new Map<string, Room>();
  mobiles = new Map<string, Mobile>();
  items = new Map<string, Item>();

  mobilePrototypes = new Map<string, MobilePrototype>();
  itemPrototypes = new Map<string, ItemPrototype>();
}
