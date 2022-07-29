import "./SwitchGrid.css";

import React from "react";
import Switch from "./Switch";
import { useState } from "react";

function SwitchGrid() {
  const rows = 3;
  const columns = 3;
  const [buttonGrid, setButtonGrid] = useState(
    new Array(rows).fill(new Array(columns).fill(false))
  );

  return (
    <table className="button-grid">
      {buttonGrid.map((buttonRow, rowIndex) => {
        return (
          <tr>
            {buttonRow.map((buttonState, cellIndex) => {
              return (
                <td className="button-cell">
                  <Switch
                    rowIndex={rowIndex}
                    cellIndex={cellIndex}
                    isOn={buttonState}
                    allButtons={buttonGrid}
                    updateButton={setButtonGrid}
                  />
                </td>
              );
            })}
          </tr>
        );
      })}
    </table>
  );
}

export default SwitchGrid;
