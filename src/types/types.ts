export type note = {
  id: string;
  name: string;
  created: string;
  category: string;
  content: string;
  dates?: [] | string;
  isArchived: boolean;
};
export type updatedNote = {
  id: string;
  name: string;
  category: string;
  content: string;
  dates?: [] | string;
};

export type notesType = {
  shouldShowArchived: boolean;
  shouldShowSummary: boolean;
  isModalOpen: boolean;
  currentNote: note | null;
  notes: note[];
};

export type notesAmountItem = { category: string; active: number; archived: number };
export type notesAmountType = notesAmountItem[];
