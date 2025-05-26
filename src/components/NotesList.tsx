import React from 'react';
import '../css/NotesList.css';

interface NotesListProps {
  notes: string[];
  onDelete: (index: number) => void;
}

const NotesList: React.FC<NotesListProps> = ({ notes, onDelete }) => {
  return (
    <div className="notes-list">
      {notes.length === 0 ? (
        <p className="empty-msg">No notes yet. Add some!</p>
      ) : (
        notes.map((note, index) => (
          <div key={index} className="note-item">
            <span>{note}</span>
            <button className="delete-btn" onClick={() => onDelete(index)}>❌</button>
          </div>
        ))
      )}
    </div>
  );
};

export default NotesList;
