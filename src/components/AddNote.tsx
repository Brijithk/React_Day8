import React, { useState } from 'react';
import '../css/AddNote.css';

interface AddNoteProps {
  onAdd: (note: string) => void;
}

const AddNote: React.FC<AddNoteProps> = ({ onAdd }) => {
  const [noteText, setNoteText] = useState('');

  const handleAdd = () => {
    if (noteText.trim() !== '') {
      onAdd(noteText);
      setNoteText('');
    }
  };

  return (
    <div className="add-note">
      <input
        type="text"
        placeholder="Type your note..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddNote;
