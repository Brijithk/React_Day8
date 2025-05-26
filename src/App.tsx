import React, { useReducer, useMemo } from 'react';
import Header from './components/Header';
import NotesList from './components/NotesList';
import AddNote from './components/AddNote';

type Action =
  | { type: 'ADD_NOTE'; payload: string }
  | { type: 'DELETE_NOTE'; payload: number };

type State = {
  notes: string[];
};

const initialState: State = {
  notes: [],
};

function notesReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_NOTE':
      return { ...state, notes: [...state.notes, action.payload] };
    case 'DELETE_NOTE':
      return {
        ...state,
        notes: state.notes.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(notesReducer, initialState);

  const addNote = (note: string) => {
    dispatch({ type: 'ADD_NOTE', payload: note });
  };

  const deleteNote = (index: number) => {
    dispatch({ type: 'DELETE_NOTE', payload: index });
  };

  // useMemo for counting notes efficiently
  const noteCount = useMemo(() => {
    console.log('Calculating note count...');
    return state.notes.length;
  }, [state.notes]);

  return (
    <div>
      <Header title="📝 My Notes App" />
      <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Total Notes: {noteCount}</p>
      <AddNote onAdd={addNote} />
      <NotesList notes={state.notes} onDelete={deleteNote} />
    </div>
  );
}

export default App;
