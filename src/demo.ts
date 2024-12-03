import { Exit } from "./model/exit";
import { Item, Wear, WearSlot } from "./model/item";
import { Mobile } from "./model/mobile";
import { Room } from "./model/room";

const mobile = new Mobile();

const helmet = new Item();
helmet.wear = new Wear();
helmet.wear.slots = new Set<WearSlot>(["head"]);

console.log(mobile.canWear(helmet));
mobile.wear(helmet);
console.log(mobile.canWear(helmet));

const room1 = new Room();
room1.name = "First room";
const exit1 = new Exit();
exit1.direction = "north";

const room2 = new Room();
room2.name = "Second room";
const exit2 = new Exit();
exit2.direction = "south";

exit1.destination = room2;
exit2.destination = room1;

room1.addExit(exit1);
room2.addExit(exit2);

import { loadAreas } from "../database/loader/json5-loader";

loadAreas();