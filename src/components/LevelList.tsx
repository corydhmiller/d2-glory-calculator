import React from "react";
import { getCurrentRank, getDifference } from "../utils/utils";
import GloryLevels from "../data/glory-levels";

const LevelList = ({ ...props }) => {
  const Levels = GloryLevels.filter((level) => level.total > props.points).map((level) => {
    return (
      <li key={level.name}>
        <strong>{level.name}</strong> - <em>({level.total})</em>
      </li>
    );
  });

  const ranks = getCurrentRank(props.points);

  const PointsTillNext = () => {
    if (ranks?.next?.total) {
      const difference = getDifference(props.points, ranks?.next?.total);
      return <h5>Points till next rank: {difference}</h5>;
    }
    return <></>;
  };
  const handleStreakChange = (e: any) => {
    let val = parseInt(e.target.value);
    if (val < 0 || isNaN(val)) val = 0;
    if (val >= 5) val = 5;
    props.setStreak(val);
  };
  const StreakInput = () => {
    return <input value={props.streak} onChange={handleStreakChange} type={"text"} />;
  };

  return (
    <>
      <h5>
        Current win streak: <StreakInput />
      </h5>
      <h3>Current rank: {ranks?.current.name}</h3>
      <PointsTillNext />
      <ul>{Levels}</ul>
    </>
  );
};
export default LevelList;
