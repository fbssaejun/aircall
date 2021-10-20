import React from 'react';
import axios from 'axios';
import '../css/activity.css';
import { useState, useEffect } from 'react';

import Calls from './Calls.jsx';


export default function Activity () {

  const [calls, setCalls] = useState([]);

  useEffect(() => {
    axios.get('https://aircall-job.herokuapp.com/activities')
    .then((res) => {
      setCalls(res.data)
    })
  }, [])

  const callFeed = calls.map(call => {
    return <Calls type={call.call_type} createdAt={call.created_at} duration={call.duration} from={call.from} direction={call.direction} isArchived={call.is_archived} via={call.via} to={call.to}/>
  })

  return (
    <div className="activity">
      <button className="archive-btn"><i class="fas fa-archive"></i>  Archive All Calls</button>
      {callFeed}
    </div>
  )
}