import React from 'react';
import axios from 'axios';
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
    return <Calls direction={call.direction}/>
  })

  return (
    <div>
      <p>Hello!</p>
      {callFeed}
    </div>
  )
}