import "./Switch.css";

function Switch({ rowIndex, cellIndex, isOn, allButtons, updateButton }) {
  const handleUpdate = () => {
    const newGrid = [...Array(allButtons.length)].map(() =>
      Array(allButtons[0].length).fill(undefined)
    );

    for (let i = 0; i < newGrid.length; i++) {
      for (let j = 0; j < newGrid[0].length; j++) {
        if (rowIndex === i && cellIndex === j) {
          newGrid[i][j] = !allButtons[i][j];

          if (i - 1 > -1) {
            newGrid[i - 1][j] = !allButtons[i - 1][j];
          }
          if (i + 1 < allButtons.length) {
            newGrid[i + 1][j] = !allButtons[i + 1][j];
          }
          if (j - 1 > -1) {
            newGrid[i][j - 1] = !allButtons[i][j - 1];
          }
          if (j + 1 < allButtons[0].length) {
            newGrid[i][j + 1] = !allButtons[i][j + 1];
          }
        } else if (newGrid[i][j] === undefined) {
          newGrid[i][j] = allButtons[i][j];
        }
      }
    }

    updateButton(newGrid);
  };

  return (
    <div className="switch-box">
      <button
        rowIndex={rowIndex}
        cellIndex={cellIndex}
        isOn={isOn}
        className={isOn ? "button-on" : "button-off"}
        onClick={handleUpdate}
      />
    </div>
  );
}

export default Switch;
