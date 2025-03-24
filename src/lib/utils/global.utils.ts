export const umamiTrack = (event: string) => {
  if (typeof window !== "undefined") {
    (window as any).umami.track(event);
  }
};
