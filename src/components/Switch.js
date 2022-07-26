import "./Switch.css";

import React, { useState } from "react";

function Switch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="switch-box">
      <button
        className={isOn ? "button-on" : "button-off"}
        onClick={() => setIsOn(!isOn)}
      />
    </div>
  );
}

export default Switch;
