type DetectDevice = () => boolean;

export const detectDevice: DetectDevice = () => window.matchMedia('(pointer: coarse)').matches;
