import React from "react";
import "../css/calls.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

export default function Calls(props) {
  const { direction, type, createdAt, duration, from, isArchived, via, to } =
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

  return (
    <div>
      {createdAt}
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
            <span className="call-from-name">{from}</span>
            <p>Tried to call via {via}</p>
          </div>
          <div>
            <p>{createdAt}</p>
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
        </Box>
      </Modal>
    </div>
  );
}
