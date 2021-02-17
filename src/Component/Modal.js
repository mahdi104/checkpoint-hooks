import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { useState } from "react";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal({ handleAdd }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [newFilm, setNewFilm] = useState({
    name: "",
    rating: 0,
    date: "",
    type: "",
    description: "",
    image: "",
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2>Add Your Movies</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd(newFilm);
          handleClose();
        }}
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setNewFilm({ ...newFilm, [e.target.name]: e.target.value });
          }}
        />
        <br />
        <label>Rating</label>
        <input
          type="Number"
          name="rating"
          onChange={(e) => {
            setNewFilm({ ...newFilm, [e.target.name]: e.target.value });
          }}
        />
        <br />

        <label>Date</label>
        <input
          type="text"
          name="date"
          onChange={(e) => {
            setNewFilm({ ...newFilm, [e.target.name]: e.target.value });
          }}
        />
        <br />

        <label>Type</label>
        <input
          type="text"
          name="type"
          onChange={(e) => {
            setNewFilm({ ...newFilm, [e.target.name]: e.target.value });
          }}
        />
        <br />

        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={(e) => {
            setNewFilm({ ...newFilm, [e.target.name]: e.target.value });
          }}
        />
        <br />

        <label>Image</label>
        <input
          type="text"
          name="image"
          onChange={(e) => {
            setNewFilm({ ...newFilm, [e.target.name]: e.target.value });
          }}
        />
        <br />
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        Add Movie
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
