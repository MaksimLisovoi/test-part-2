import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';
import { notesType, note, updatedNote } from '../types';

const notesInitialState: notesType = {
  shouldShowArchived: false,
  shouldShowSummary: false,
  isModalOpen: false,
  currentNote: null,
  notes: [
    {
      id: '1',
      name: 'Shoping List',
      created: 'May 21, 2023',
      category: 'Task',
      content:
        'Should go to the store to buy products for Bolognese pasta, such as: beef, basil, noodles',
      isArchived: false,
    },
    {
      id: '2',
      name: 'The theory of evolution',
      created: 'May 27, 2023',
      category: 'Idea',
      content: 'Power doesn`t matter, without courage!',
      isArchived: false,
    },
    {
      id: '3',
      name: 'The theory of evolution',
      created: 'May 27, 2023',
      category: 'Random Thought',
      content:
        'Two assure edward whence the was. Who worthy yet ten boy denote wonder. Weeks views her sight old tears sorry. Additions can suspected its concealed put furnished. Met the why particular devonshire decisively considered partiality. Certain it waiting no entered is. Passed her indeed uneasy shy polite appear denied. Oh less girl no walk. At he spot with five of view.',
      isArchived: false,
    },
    {
      id: '4',
      name: 'The theory of evolution',
      created: 'May 27, 2023',
      category: 'Random Thought',
      content:
        'Style never met and those among great. At no or september sportsmen he perfectly happiness attending. Depending listening delivered off new she procuring satisfied sex existence. Person plenty answer to exeter it if. Law use assistance especially resolution cultivated did out sentiments unsatiable. Way necessary had intention happiness but september delighted his curiosity. Furniture furnished or on strangers neglected remainder engrossed.',
      isArchived: false,
    },
    {
      id: '5',
      name: 'The theory of evolution',
      created: 'May 27, 2023',
      category: 'Quote',
      content:
        'Style never met and those among great. At no or september sportsmen he perfectly happiness attending. Depending listening delivered off new she procuring satisfied sex existence. Person plenty answer to exeter it if. Law use assistance especially resolution cultivated did out sentiments unsatiable. Way necessary had intention happiness but september delighted his curiosity. Furniture furnished or on strangers neglected remainder engrossed.',
      isArchived: false,
    },
    {
      id: '6',
      name: 'The theory of evolution',
      created: 'May 27, 2023',
      category: 'Random Thought',
      content:
        'Style never met and those among great. At no or september sportsmen he perfectly happiness attending. Depending listening delivered off new she procuring satisfied sex existence. Person plenty answer to exeter it if. Law use assistance especially resolution cultivated did out sentiments unsatiable. Way necessary had intention happiness but september delighted his curiosity. Furniture furnished or on strangers neglected remainder engrossed.',
      isArchived: false,
    },
    {
      id: '7',
      name: 'The theory of evolution',
      created: 'May 27, 2023',
      category: 'Random Thought',
      content:
        'He share of first to worse. Weddings and any opinions suitable smallest nay. My he houses or months settle remove ladies appear. Engrossed suffering supposing he recommend do eagerness. Commanded no of depending extremity recommend attention tolerably. Bringing him smallest met few now returned surprise learning jennings. Objection delivered eagerness he exquisite at do in. Warmly up he nearer mr merely me.',
      isArchived: false,
    },
  ],
};

const notesSlice = createSlice({
  name: 'notes',
  initialState: notesInitialState,
  reducers: {
    addNote: {
      reducer(state, action: PayloadAction<note>) {
        state.notes.push(action.payload);
      },
      prepare(name, created, category, content, dates) {
        return {
          payload: {
            name,
            created,
            category,
            content,
            dates,
            id: nanoid(),
            isArchived: false,
          },
        };
      },
    },
    deleteNote(state, action: PayloadAction<string>) {
      const index = state.notes.findIndex(note => note.id === action.payload);
      state.notes.splice(index, 1);
    },
    updateNote: {
      reducer(state, action: PayloadAction<updatedNote>) {
        // console.log(state.notes.find(note => note.id === action.payload.id));

        for (const note of state.notes) {
          if (note.id === action.payload.id) {
            note.name = action.payload.name;
            note.content = action.payload.content;
            note.category = action.payload.category;
            note.dates = action.payload.dates;

            break;
          }
        }
      },
      prepare(id, name, category, content, dates) {
        return {
          payload: {
            id,
            name,
            category,
            content,
            dates,
          },
        };
      },
    },
    archiveNote(state, action: PayloadAction<string>) {
      for (const note of state.notes) {
        if (note.id === action.payload) {
          note.isArchived = !note.isArchived;
          break;
        }
      }
    },
    setCurrentNote(state, action: PayloadAction<any>) {
      state.currentNote = action.payload;
    },
    toggleShouldShowArchived(state) {
      state.shouldShowArchived = !state.shouldShowArchived;
    },
    toggleShouldShowSummary(state) {
      state.shouldShowSummary = !state.shouldShowSummary;
    },
    toggleModalOpen(state) {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});
// Експортуємо генератори екшенів та редюсер
export const {
  addNote,
  deleteNote,
  archiveNote,
  toggleShouldShowArchived,
  toggleShouldShowSummary,
  toggleModalOpen,
  updateNote,
  setCurrentNote,
} = notesSlice.actions;
export const notesReducer = notesSlice.reducer;
