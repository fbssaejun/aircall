import React from 'react';

export default function Calls (props) {

  const {direction} = props;

  console.log("Direction got here", direction)

  return (
    <div>
      <p>{direction}</p>
    </div>
  );
}