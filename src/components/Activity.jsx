import React from 'react';
import '../css/activity.css';

import Calls from './Calls.jsx';


export default function Activity (props) {

  const { calls } = props;

  const callFeed = calls.map(call => {
    if(call.is_archived === false) {
      return  <Calls key={call.id} type={call.call_type} createdAt={call.created_at} duration={call.duration} from={call.from} direction={call.direction} isArchived={call.is_archived} via={call.via} to={call.to}/>  
    }
  })

  // const archive = () => {
  //   axios.post('https://aircall-job.herokuapp.com/activities', {
  //     is_archived: true
  //   })
  // };

  return (
    <div className="activity">
      <button className="archive-btn" onClick={() => archive()}><i className="fas fa-archive"></i>  Archive All Calls</button>
      {callFeed}
    </div>
  )
}