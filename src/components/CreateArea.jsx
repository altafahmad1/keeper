import React from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const [inContent, setInContent] = React.useState(false);

  function handleContentClick(){
    setInContent(true);
  }

  function handleFocusOut(){
    setInContent(false);
  }

  return (
    <div>
      <form onSubmit={props.addNote} className="create-note">
        {inContent? <input name="title" onChange={props.handleChange} placeholder="Title" value={props.note.title}/> : null}
        <textarea name="content" onClick={handleContentClick} onChange={props.handleChange} 
        placeholder="Take a note..." rows={inContent ? "3": "1"} value={props.note.content}/>
        
        <Zoom in={inContent}>        
          <Fab>
            <AddIcon onClick={props.addNote}/>
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
