import React, { useMemo } from "react";
import { getHerosByPublisher } from "../../selectors/getHerosByPublisher";
import HeroItem from "./HeroItem";

const HeroList = ({ publisher }) => {
  //   const heros = getHerosByPublisher(publisher);
  const heros = useMemo(() => getHerosByPublisher(publisher), [publisher]);

  return (
    <div className="row row-cols-1 row-cols-md-3">
      {heros.map((ele) => {
        return <HeroItem key={ele.id} hero={ele} />;
      })}
    </div>
  );
};

export default HeroList;
