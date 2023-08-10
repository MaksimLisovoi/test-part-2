import { DataGrid } from '@mui/x-data-grid';

import { columnsSummary } from '../../constants/columns';
import { useAppSelector } from '../../redux/hooks';
import { selectNotes } from '../../redux/selectors';

export const SummaryTable = () => {
  const notes = useAppSelector(selectNotes);

  type notesAmountType = { category: string; active: number; archived: number }[];

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

  return (
    <>
      <DataGrid
        autoHeight
        rows={resultArr}
        getRowId={(row: any) => row.category}
        columns={columnsSummary}
        //
        disableRowSelectionOnClick
        sx={{
          // minHeight: '600px',
          mt: 2,
          p: 2,
          boxShadow: 2,
          border: 2,
          borderRadius: 2,
          backgroundColor: 'primary.tableBg',
          borderColor: 'primary.border',
          '& .MuiDataGrid-row:hover': {
            backgroundColor: 'primary.accent',
          },
          fontSize: 16,
          '& .MuiTablePagination-root': {
            display: 'none',
          },
        }}
      />
    </>
  );
};
