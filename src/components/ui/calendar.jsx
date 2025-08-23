import * as React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export function Calendar({
  mode = "single",
  selected,
  onSelect,
  month,
  onMonthChange,
  className = "",
  classNames = {},
}) {
  return (
    <DayPicker
      mode={mode}
      selected={selected}
      onSelect={onSelect}
      month={month}
      onMonthChange={onMonthChange}
      className={className}
      classNames={{
        root: "rdp p-2",
        caption: "rdp-caption flex justify-center items-center h-10 font-medium",
        head_cell: "rdp-head_cell text-xs text-gray-500 font-normal w-12 text-center",
        table: "rdp-table mx-auto",
        row: "rdp-row",
        cell: "rdp-cell w-12 h-12 text-center align-middle",
        day: "rdp-day inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100",
        day_selected: "bg-blue-600 text-white hover:bg-blue-700",
        ...classNames,
      }}
    />
  );
}
