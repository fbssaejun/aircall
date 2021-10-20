import React from "react";
import Calls from "./Calls.jsx";
import "../css/activity.css";

import { archiveAll } from "../helpers/moveCalls.jsx";

export default function Activity({ calls, setCalls }) {
  const callFeed = calls.map((call) => {
    if (!call.is_archived) {
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
          setCalls={setCalls}
          id={call.id}
        />
      );
    }
  });

  const inboxCalls = calls.filter((call) => {
    return call.is_archived === false;
  });

  return (
    <div className="activity" >
      <button type="button" className="archive-btn" onClick={() => archiveAll(inboxCalls)}>
        <i className="fas fa-archive"></i>Archive All Calls
      </button>
      <h1>Inbox</h1>
      {callFeed}
    </div>
  );
}
