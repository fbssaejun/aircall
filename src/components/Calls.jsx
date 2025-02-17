import React from "react";
import axios from 'axios';
import "../css/calls.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import moment from "moment";

import { useState } from "react";

export default function Calls(props) {
  const { direction, type, createdAt, duration, from, isArchived, via, to, id, setCalls, calls } =
    props;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    border: "1px solid #000",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };

  const callDate = moment(createdAt).format("MMM DD YYYY");
  const callTime = moment(createdAt).format("LT");

   const archiveACall = (id, callsArr) => {
    axios.post(`https://aircall-job.herokuapp.com/activities/${id}`, {
      is_archived: true
    }).then((res) => {
      const newCalls = [...callsArr]
      newCalls.map((call) => {
        if(call.id === res.data.id) {
          return call.is_archived = true
        }
      })
      setCalls(() => newCalls)
    })
  };
  
   const unArchiveACall = (id, callsArr) => {
    axios.post(`https://aircall-job.herokuapp.com/activities/${id}`, {
      is_archived: false
    }).then((res) => {
      const newCalls = [...callsArr]
      newCalls.map((call) => {
        if(call.id === res.data.id) {
          return call.is_archived = false
        }
      })
      setCalls(() => newCalls)
    })
  };

  return (
    <div>
      {callDate}
      <button className="individual-call-btn" onClick={() => handleOpen()}>
        <div className="individual-call">
          <div>
            <span className="material-icons">local_phone</span>
            {direction === "inbound" ? (
              <span className="material-icons received">call_received</span>
            ) : (
              <span className="material-icons made">call_made</span>
            )}
          </div>
          <div className="call-info">
            {direction === "inbound" ? (
              <span className="call-from-name">{from}</span>
            ) : (
              <span className="call-from-name">{to}</span>
            )}
            <p>Tried to call via {via}</p>
          </div>
          <div>
            <p>{callTime}</p>
          </div>
        </div>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="call-details">
          <h2>Call details</h2>
          <span>From: {from}</span>
          <span>To: {to}</span>
          <span>Call type: {type}</span>
          <span>Duration: {duration} min</span>
          <span>Archived: {isArchived.toString()}</span>
          <span>Via: {via}</span>
          {!isArchived ? 
          <button className="archive-button" onClick={(e) => {
            e.preventDefault()
            handleClose()
            archiveACall(id, calls)}}>Archive</button>
          :
          <button className="archive-button" onClick={(e) => {
            e.preventDefault()
            handleClose()
            unArchiveACall(id, calls)}}>Unarchive</button>
         }
        </Box>
      </Modal>
    </div>
  );
}
