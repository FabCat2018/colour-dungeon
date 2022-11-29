import { useEffect, useState } from "react";
import { runSolver } from "../solver";
import Switch from "./Switch";
import "./SwitchGrid.css";
import WinnerModal from "./WinnerModal";

function SwitchGrid() {
  const [rows, setRows] = useState(2);
  const [columns, setColumns] = useState(2);
  const [buttonGrid, setButtonGrid] = useState(
    [...Array(rows)].map(() => Array(columns).fill(false))
  );
  const [showWinnerModal, setShowWinnerModal] = useState(false);

  const convertDimension = (value: string | number) => {
    return value === "" || value < 1 ? 1 : parseInt(value as string);
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
        <div className="dimension">
          <label htmlFor="rows">Rows:</label>
          <input
            id="rows"
            type="text"
            value={rows}
            onChange={(event) => setRows(convertDimension(event.target.value))}
          />
        </div>
        <div className="dimension">
          <label htmlFor="columns">Columns:</label>
          <input
            id="columns"
            type="text"
            value={columns}
            onChange={(event) =>
              setColumns(convertDimension(event.target.value))
            }
          />
        </div>
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
      <button className="solve-button" onClick={() => runSolver(rows, columns)}>
        Autosolve Grid
      </button>
    </>
  );
}

export default SwitchGrid;
