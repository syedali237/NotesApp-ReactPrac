import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  function addNotes(newNote){
    setNotes(prevValues => {
      return [...prevValues , newNote]
    })
  }
  console.log(notes);

  function deleteNote(id) {
    setNotes((prevValues) => {
      return prevValues.filter((item, index) => index !== id);
    });
    console.log("Deleted");
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes} />
      {notes.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onDelete = {deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
