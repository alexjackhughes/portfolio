export const minsToRead = (content: string): number => {
  return Math.floor(content.split(" ").length / 40);
};
