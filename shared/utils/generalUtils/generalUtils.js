export function isClient() {
  return typeof window === 'object';
}

export const minutes = (number) => 1000 * 60 * number;
