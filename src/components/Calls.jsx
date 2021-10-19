import React from "react";
import "../css/calls.css";
import { useState } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';




export default function Calls(props) {
  const { direction, type, createdAt, duration, from, isArchived, via } = props;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      {createdAt}
    <button onClick={()=>handleOpen()}>
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
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
