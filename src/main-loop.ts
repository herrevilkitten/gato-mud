import { MUD_CONFIG } from "./config";

export function mainLoop() {
  let isRunning = false;
  const mainLoopInterval = setInterval(() => {
    if (isRunning) {
      return;
    }
    isRunning = true;

    isRunning = false;
  }, 1000 / MUD_CONFIG.server.loopsPerSecond);
}
