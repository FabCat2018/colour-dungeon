import "./SwitchGrid.css";

import { useEffect, useState } from "react";

import React from "react";
import Switch from "./Switch";
import WinnerModal from "./WinnerModal";

function SwitchGrid() {
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(3);
  const [buttonGrid, setButtonGrid] = useState(
    [...Array(rows)].map(() => Array(columns).fill(false))
  );
  const [showWinnerModal, setShowWinnerModal] = useState(false);

  const convertDimension = (value) => {
    return value === "" || value < 1 ? 1 : parseInt(value);
  };

  useEffect(() => {
    let allSwitchesOn = true;
    buttonGrid.forEach((row) => {
      if (row.includes(false)) {
        allSwitchesOn = false;
      }
    });
    setShowWinnerModal(allSwitchesOn);
  }, [buttonGrid]);

  useEffect(() => {
    setButtonGrid([...Array(rows)].map(() => Array(columns).fill(false)));
  }, [rows, columns]);

  return (
    <>
      {showWinnerModal && (
        <WinnerModal allButtons={buttonGrid} resetGrid={setButtonGrid} />
      )}
      <div className="dimensions">
        <label htmlFor="rows">Rows:</label>
        <input
          id="rows"
          type="text"
          value={rows}
          onChange={(event) => {
            setRows(convertDimension(event.target.value));
          }}
        />
        <label htmlFor="columns">Columns:</label>
        <input
          id="columns"
          type="text"
          value={columns}
          onChange={(event) => setColumns(convertDimension(event.target.value))}
        />
      </div>
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
