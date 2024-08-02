export interface MudConfig {
  server: {
    loopsPerSecond: number;
  };
}

export const MUD_CONFIG: MudConfig = {
  server: {
    loopsPerSecond: 10,
  },
};
