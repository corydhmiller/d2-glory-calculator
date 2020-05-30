import React from "react";
import { getCurrentRank } from "../utils/utils";

const WinLossButtons = ({ ...props }) => {
  const ranks = getCurrentRank(props.points);

  const handleWinClick = () => {
    let winStreak = props.streak;
    if (props.streak <= 0) winStreak = 0;
    if (props.streak >= 5) winStreak = 4;

    props.setPoints((prevPoints: any) => prevPoints + ranks?.current.wins[winStreak]);
    props.setStreak((prevStreak: any) => {
      if (prevStreak + 1 >= 5) return 5;
      return prevStreak + 1;
    });
  };

  const handleLoseClick = () => {
    if (ranks?.current?.loss) {
      props.setPoints((prevPoints: any) => {
        if (prevPoints - ranks?.current?.loss <= 0) return 0;
        return prevPoints - ranks?.current?.loss;
      });
      props.setStreak((prevStreak: any) => {
        if (prevStreak - 2 <= 0) return 0;
        return prevStreak - 2;
      });
    }
  };

  return (
    <div style={{ display: "block" }}>
      <button onClick={handleLoseClick}>Loss</button>
      <button onClick={handleWinClick}>Win</button>
    </div>
  );
};
export default WinLossButtons;
