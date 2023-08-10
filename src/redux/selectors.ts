import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { notesAmountType } from '../types';

export const selectShouldShowArchived = (state: RootState) => state.shouldShowArchived;
export const selectShouldShowSummary = (state: RootState) => state.shouldShowSummary;
export const selectIsModalOpen = (state: RootState) => state.isModalOpen;

export const selectNotes = (state: RootState) => state.notes;
export const selectCurrentNote = (state: RootState) => state.currentNote;

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

export const selectSummary = createSelector(
  [selectNotes, selectShouldShowSummary],
  (notes, shouldShowSummary) => {
    if (!shouldShowSummary) {
      return [];
    }
    const resultArr: notesAmountType = [];

    const notesAmount = notes.reduce((acc: any, note) => {
      return {
        ...acc,
        active: note.isArchived
          ? { ...acc.active, [note.category]: acc?.active?.[note.category] || 0 }
          : { ...acc.active, [note.category]: (acc?.active?.[note.category] || 0) + 1 },
        archived: !note.isArchived
          ? { ...acc.archived, [note.category]: acc?.archived?.[note.category] || 0 }
          : { ...acc.archived, [note.category]: (acc?.archived?.[note.category] || 0) + 1 },
      };
    }, {});

    const allCategories = Object.keys({ ...notesAmount.active, ...notesAmount.isArchived });

    allCategories.map(category => {
      resultArr.push({
        category: category,
        active: notesAmount.active[category],
        archived: notesAmount.archived[category],
      });
    });

    return resultArr;
  },
);

// export const selectArchivedNotes = (state: RootState) =>
//   state.notes.filter(note => note.isArchived);
