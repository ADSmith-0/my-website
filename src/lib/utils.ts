export const updateHash = (newHash: string): void => {
  if (!newHash) {
    window.location.hash = newHash;
  }
  window.location.hash = `#${newHash}`;
};
