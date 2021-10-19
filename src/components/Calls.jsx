import React from "react";
import "../css/calls.css";

export default function Calls(props) {
  const { direction, type, createdAt, duration, from, isArchived, via } = props;

  return (
    <div>
      {createdAt}
      <div className="individual-call">
        <div>
          <span class="material-icons">local_phone</span>
          {direction === "inbound" ? (
            <span class="material-icons">call_received</span>
          ) : (
            <span class="material-icons">call_made</span>
          )}
        </div>
        <div className="call-info">
          <p>{from}</p>
          <p>Tried to call via {via}</p>
        </div>
        <div>
          <p>{createdAt}</p>
        </div>
      </div>
    </div>
  );
}
