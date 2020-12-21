import { heros } from "../data/heros";

export const getHeroById = (id) => {
  const filter = heros.filter((ele) => {
    return ele.id === id;
  });
  return filter[0];
};
