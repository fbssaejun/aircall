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
    return <Calls type={call.call_type} createdAt={call.create_at} duration={call.duration} from={call.from} direction={call.direction} isArchived={call.is_archived} via={call.via}/>
  })

  return (
    <div className="activity">
      {callFeed}
    </div>
  )
}