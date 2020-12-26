import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  
  const [notes, setNotes] = React.useState([]);
  const [note, setNote] = React.useState({
    title: "",
    content: ""
  });

  function handleChange(event){
    const {name, value} = event.target;
    
    setNote(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  };

  function addNote(event){
    const newNote = {
      title: note.title,
      content: note.content
    };

    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });

    setNote({
      title: "",
      content: ""
    })
    event.preventDefault();
  }

  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }


  return (
    <div>
      <Header />
      <CreateArea handleChange={handleChange} note={note} addNote={addNote}/>
      {notes.map((singleNote, index) =>{
        return <Note onDelete={deleteNote} note={singleNote} key={index} id={index}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
