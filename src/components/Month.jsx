import React from "react";
import Day from "./Day";
export default function Month({ month }) {
  return (
    <div className="border flex-1 grid grid-cols-7 grid-rows-5 p-10">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
