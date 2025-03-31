import _ from "lodash";
import React from "react";

export default function Divider() {
  return (
    <div className="flex flex-row justify-center items-center h-16 gap-5 text-white font-bold text-lg overflow-hidden bg-primary">
      {_.times(12, (i: number) => (
        <React.Fragment key={i}>
          <p>WELCOME</p>
          <p>✦</p>
        </React.Fragment>
      ))}
    </div>
  );
}
