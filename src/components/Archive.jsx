import React from "react";
import Calls from "./Calls.jsx";
import "../css/activity.css";

import { unarchiveAll } from "../helpers/moveCalls.jsx";

export default function Archive({ calls, setCalls }) {
  
  const callFeed = calls.map((call) => {
    if (call.is_archived === true) {
      return (
        <Calls
          key={call.id}
          type={call.call_type}
          createdAt={call.created_at}
          duration={call.duration}
          from={call.from}
          direction={call.direction}
          isArchived={call.is_archived}
          via={call.via}
          to={call.to}
          id={call.id}
          setCalls={setCalls}
          calls={calls}
        />
      );
    }
  });

  const archivedCalls = calls.filter(call => call.is_archived === true );

  return (
    <div className="activity">
      <button
        className="archive-btn"
        onClick={() => unarchiveAll(archivedCalls, calls, setCalls)}
      >
        <i className="far fa-folder-open"></i>Unarchive All Calls
      </button>
      <h1>Archive</h1>
      {callFeed}
    </div>
  );
}
