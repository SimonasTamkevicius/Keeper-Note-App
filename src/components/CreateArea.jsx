import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [clickedInput, setClickedInput] = useState(false);

  let numRows;

  if (clickedInput) {
    numRows = 3;
  } else {
    numRows = 1;
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  
  function handleInputClick() {
    console.log("input clicked");
    setClickedInput(true);
  }

  return (
    <div>
      <form className="create-note">
        {clickedInput && 
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          required
        />
        }
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={numRows}
          onClick={handleInputClick}
          required
        />

        <Zoom in={clickedInput}>
            <Fab onClick={submitNote} ><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
