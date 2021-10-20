import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/activity.css';
import { useHistory } from 'react-router';


import Calls from './Calls.jsx';


export default function Activity ({calls, setCalls}) {

  const [dum, setDum] = useState(false)

  const callFeed = calls.map(call => {
    if(!call.is_archived) {
      return  <Calls key={call.id} type={call.call_type} createdAt={call.created_at} duration={call.duration} from={call.from} direction={call.direction} isArchived={call.is_archived} via={call.via} to={call.to} id={call.id}/>  
    }
  })

  const arr = calls.filter((call) => {
      return call.is_archived === false;
    }
  )

  const archive = (callArray) => {

       callArray.map(call => {
  
        axios.post(`https://aircall-job.herokuapp.com/activities/${call.id}`, {
          is_archived: true
        }).then(() => {
          const arr = calls.filter((call) => call.is_archived === false)
          // setCalls(arr)
          // setDum(prev => !prev)
        })
  
      })
  };


  return (
    <div className="activity">
      <button className="archive-btn" onClick={archive(arr)}><i className="fas fa-archive"></i>  Archive All Calls</button>
      {callFeed}
    </div>
  )
}