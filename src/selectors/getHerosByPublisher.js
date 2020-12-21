import { heros } from "../data/heros";

export const getHerosByPublisher = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`Publisher ${publisher} no es correcto`);
  }

  const filter = heros.filter((ele) => {
    return ele.publisher === publisher;
  });

  return filter;
};
