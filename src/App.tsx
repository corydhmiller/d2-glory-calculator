import React from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import LevelList from "./components/LevelList";
import WinLossButtons from "./components/WinLossButtons";

const App = () => {
  const [points, setPoints] = React.useState(0);
  const [streak, setStreak] = React.useState(0);

  return (
    <div className="App">
      <h1>Glory Calculator</h1>
      <Calculator points={points} setPoints={setPoints} />
      <WinLossButtons points={points} setPoints={setPoints} streak={streak} setStreak={setStreak} />
      <LevelList points={points} streak={streak} setStreak={setStreak} />
    </div>
  );
};

export default App;
