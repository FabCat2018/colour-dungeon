import "./Switch.css";

function Switch({ rowIndex, cellIndex, isOn, allButtons, updateButton }) {
  const handleUpdate = () => {
    const newGrid = allButtons.map((buttonRow, rowNumber) => {
      return buttonRow.map((buttonCell, cellNumber) => {
        if (rowNumber === rowIndex && cellNumber === cellIndex) {
          return !buttonCell;
        }
        return buttonCell;
      });
    });

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
