import "./SwitchGrid.css";

import React from "react";
import Switch from "./Switch";

function SwitchGrid() {
  return (
    <table className="button-grid">
      <tr>
        <td className="button-cell">
          <Switch />
        </td>
        <td className="button-cell">
          <Switch />
        </td>
        <td className="button-cell">
          <Switch />
        </td>
      </tr>
      <tr>
      <td className="button-cell">
          <Switch />
        </td>
        <td className="button-cell">
          <Switch />
        </td>
        <td className="button-cell">
          <Switch />
        </td>
      </tr>
      <tr>
      <td className="button-cell">
          <Switch />
        </td>
        <td className="button-cell">
          <Switch />
        </td>
        <td className="button-cell">
          <Switch />
        </td>
      </tr>
    </table>
  );
}

export default SwitchGrid;
