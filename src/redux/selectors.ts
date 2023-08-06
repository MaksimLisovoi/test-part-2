import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from './store';

export const selectShouldShowArchived = (state: RootState) => state.shouldShowArchived;

export const selectNotes = (state: RootState) => state.notes;

export const selectVisibleNotes = createSelector(
  [selectShouldShowArchived, selectNotes],
  (shouldShowArchived, notes) => {
    switch (shouldShowArchived) {
      case true:
        return notes.filter(note => note.isArchived);
      case false:
        return notes.filter(note => !note.isArchived);
      default:
        return notes;
    }
  },
);

// export const selectArchivedNotes = (state: RootState) =>
//   state.notes.filter(note => note.isArchived);
