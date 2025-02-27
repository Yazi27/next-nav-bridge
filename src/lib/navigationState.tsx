// app/lib/cardNavigation.ts
let isNavigating = false;

let subscriber: (() => void) | null = null;

export function startCardNavigation(): void {
  isNavigating = true;
  if (subscriber) subscriber();
}

export function endCardNavigation(): void {
  isNavigating = false;
  if (subscriber) subscriber();
}

export function subscribeToCardNavigation(callback: () => void): () => void {
  subscriber = callback;
  return () => {
    subscriber = null;
  };
}

export function getCardNavigationState() {
  return isNavigating;
}
