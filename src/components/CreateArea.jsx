import React, { useState } from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const [isExpanded , setExpanded] = useState(false);

  function expand(){
    setExpanded(true);
  }

  const [note ,setNote] = useState({
    title : "",
    content : ""
  })

  function handleChange(event){
    const {value , name} = event.target;

    setNote(prevValue => {
      return {
        ...prevValue,  
        [name] : value 
      }
    })
  }

  function submitNote(event){
    props.onAdd(note);
    setNote({
      title : "",
      content : ""
    })
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">

        {isExpanded && (
          <input
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={handleChange}
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          placeholder="Take a note..."
          value={note.content}
          onChange={handleChange}
          rows={isExpanded ? "3" : "1"}
        />
        <Zoom in={isExpanded && true}>
          <Fab onClick={submitNote}>
            <AddCircleIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
