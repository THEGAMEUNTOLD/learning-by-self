import { useState } from "react";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (index) => {
    const copy = [...notes];
    copy.splice(index, 1);
    setNotes(copy);
  };

  return (
    <div className="min-h-screen bg-zinc-600 text-white lg:flex">
      <NoteForm addNote={addNote} />
      <NotesList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default App;