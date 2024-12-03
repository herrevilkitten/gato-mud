import JSON5 from "json5";
import { join } from "path";
import { readdirSync, readFileSync } from "fs";
import { Room } from "../../src/model/room";

function readArea(file: string) {
  console.log(file);
  const area = JSON5.parse<AreaFile>(readFileSync(file, "utf8"));
  console.log(area);

  for (const [id, roomProto] of Object.entries(area.rooms)) {
    const room = new Room();
    room.id = id;
    room.name = roomProto.name ?? `Room #${id}`;
    room.description = roomProto.description ?? "";
  }
}

export function loadAreas() {
  const AREA_DIR = join(".", "world", "areas");

  console.log(`Loading JSON5 areas from ${AREA_DIR}`);
  for (const file of readdirSync(AREA_DIR)) {
    const fqn = join(AREA_DIR, file);
    readArea(fqn);
  }
}

export interface ExitFile {
  direction: string;
  to: string;
}

export interface RoomFile {
  name: string;
  description: string;
  exits: ExitFile[];
}

export interface AreaFile {
  id: string;
  name: string;
  description: string;
  rooms: {[name: string]: RoomFile};
}
