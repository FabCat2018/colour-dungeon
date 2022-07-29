import "./SwitchGrid.css";

import { useEffect, useState } from "react";

import React from "react";
import Switch from "./Switch";
import WinnerModal from "./WinnerModal";

function SwitchGrid() {
  const rows = 2;
  const columns = 3;
  const [buttonGrid, setButtonGrid] = useState(
    [...Array(rows)].map(() => Array(columns).fill(false))
  );
  const [showWinnerModal, setShowWinnerModal] = useState(false);

  useEffect(() => {
    let allSwitchesOn = true;
    buttonGrid.forEach((row) => {
      if (row.includes(false)) {
        allSwitchesOn = false;
      }
    });
    setShowWinnerModal(allSwitchesOn);
  }, [buttonGrid]);

  return (
    <>
      {showWinnerModal && (
        <WinnerModal allButtons={buttonGrid} resetGrid={setButtonGrid} />
      )}
      <table className="button-grid">
        <tbody>
          {buttonGrid.map((buttonRow, rowIndex) => {
            return (
              <tr key={rowIndex}>
                {buttonRow.map((buttonState, cellIndex) => {
                  return (
                    <td className="button-cell" key={cellIndex}>
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
        </tbody>
      </table>
    </>
  );
}

export default SwitchGrid;
