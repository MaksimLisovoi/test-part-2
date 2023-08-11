import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import { columns, columnsSummary } from '../../constants/columns';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { CustomGridToolbar } from '../CustomGridToolbar';
import { selectShouldShowSummary, selectSummary, selectVisibleNotes } from '../../redux/selectors';
import { updateNote } from '../../redux/notesSlice';
import { styled, useTheme } from '@mui/material';

export const DataTable = () => {
  const apiRef = useGridApiRef();

  const notes = useAppSelector(selectVisibleNotes);
  const summary = useAppSelector(selectSummary);
  const shouldShowSum = useAppSelector(selectShouldShowSummary);

  const dispatch = useAppDispatch();
  const theme = useTheme();

  return (
    <DataGrid
      slots={{
        toolbar: CustomGridToolbar,
      }}
      apiRef={apiRef}
      autoHeight
      rows={shouldShowSum ? summary : notes}
      getRowId={(row: any) => (shouldShowSum ? row.category : row.id)}
      //
      editMode="row"
      processRowUpdate={(updatedRow, originalRow) => {
        const { id, name, category, content, dates } = updatedRow;
        dispatch(updateNote(id, name, category, content, dates));
        return updatedRow;
      }}
      //
      columns={shouldShowSum ? columnsSummary : columns}
      //
      initialState={{
        pagination: { paginationModel: { pageSize: 10 } },
      }}
      pageSizeOptions={[5, 10, 20, 50]}
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

        fontSize: {
          [theme.breakpoints.down('md')]: {
            fontSize: 12,
          },
          [theme.breakpoints.up('lg')]: {
            fontSize: 14,
          },
        },

        '& .MuiTablePagination-root': shouldShowSum
          ? {
              display: 'none',
            }
          : {
              display: 'inherit',
            },
      }}
    />
  );
};
