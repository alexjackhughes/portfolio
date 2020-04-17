import React from "react";

export default function Container({ children }) {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-three-quarters">{children}</div>
      </div>
    </div>
  );
}
