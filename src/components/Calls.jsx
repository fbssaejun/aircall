import React from 'react';
import '../css/calls.css';

export default function Calls (props) {

  const {direction, type, createdAt, duration, from, isArchived, via} = props;

  return (
    <div className="individual-call">
    <div>
    <span class="material-icons">local_phone</span>
      {direction === 'inbound' ?
        <span class="material-icons">call_received</span>
        :
        <span class="material-icons">call_made</span>
      }
    </div>
      <p>{from}</p>
      <p>Tried to call on {via}</p>
    </div>
  );
}