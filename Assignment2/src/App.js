import React, { useState, useEffect } from 'react';
import Note from './Note';
import AddNoteForm from './AddNoteForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
    if (savedDarkMode) {
      setDarkMode(savedDarkMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  const editNote = (index, updatedNote) => {
    const newNotes = [...notes];
    newNotes[index] = updatedNote;
    setNotes(newNotes);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <h1 className="text-center">Keep Notes</h1>
      <button className="btn btn-secondary mb-3" onClick={toggleDarkMode}>
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>
      <AddNoteForm addNote={addNote} />
      <div className="notes-container">
        {notes.map((note, index) => (
          <Note
            key={index}
            note={note}
            index={index}
            deleteNote={deleteNote}
            editNote={editNote}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
