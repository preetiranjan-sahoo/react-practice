import { useState } from "react";
import "./ToggleSwitch.css";
import(useState);

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  const checkIsOn = isOn ? "On" : "Off";
  const toggleBGColor = { backgroundColor: isOn ? "#4caf50" : "#f44336" };

  return (
    <div
      className="toggle-switch"
      style={toggleBGColor}
      onClick={handleToggleSwitch}
    >
      <div className={`switch ${checkIsOn}`}>
        <span className="swicth-state">{checkIsOn}</span>
      </div>
    </div>
  );
};
