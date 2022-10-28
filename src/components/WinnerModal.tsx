import "./WinnerModal.css";

import React from "react";

function WinnerModal({
  allButtons,
  resetGrid,
}: {
  allButtons: Array<Array<boolean>>;
  resetGrid: (newGrid: Array<Array<boolean>>) => void;
}) {
  const handleReset = () => {
    const newGrid = [...Array(allButtons.length)].map(() =>
      Array(allButtons[0].length).fill(false)
    );

    resetGrid(newGrid);
  };

  return (
    <div className="modal-content">
      <div className="modal-header">
        <h2>You Win!</h2>
      </div>
      <div className="modal-body">
        <button className="modal-button" onClick={handleReset}>
          Play Again
        </button>
      </div>
    </div>
  );
}

export default WinnerModal;
