import React from 'react';
import '../css/activity.css';

import Calls from './Calls.jsx';


export default function Archive (props) {

  const { calls } = props;

  const callFeed = calls.map(call => {
    if(call.is_archived === true) {
      return  <Calls key={call.id} type={call.call_type} createdAt={call.created_at} duration={call.duration} from={call.from} direction={call.direction} isArchived={call.is_archived} via={call.via} to={call.to} id={call.id}/>  
    }
  })

  return (
    <div className="activity">
      <h1>Archive</h1>
      {callFeed}
    </div>
  )
}