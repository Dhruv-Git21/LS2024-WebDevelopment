import React, { useState } from 'react';

function Note({ note, index, deleteNote, editNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState({ title: note.title, content: note.content });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editNote(index, editedNote);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  return (
    <div className="note">
      <div className="card">
        <div className="card-body">
          {isEditing ? (
            <>
              <div className="edit-form">
                <input
                  type="text"
                  name="title"
                  value={editedNote.title}
                  onChange={handleChange}
                  className="form-control mb-2"
                  placeholder="Title"
                />
                <textarea
                  name="content"
                  value={editedNote.content}
                  onChange={handleChange}
                  className="form-control mb-2"
                  placeholder="Content"
                />
                <button onClick={handleSave} className="btn btn-success">Save</button>
              </div>
            </>
          ) : (
            <>
              <h4 className="card-title">{note.title}</h4>
              <p className="card-text">{note.content}</p>
              <button onClick={() => deleteNote(index)} className="btn btn-danger">Delete</button>
              <button onClick={handleEdit} className="btn btn-primary">Edit</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Note;
