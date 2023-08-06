import { DataGrid, GridRowSelectionModel, useGridApiRef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { columns } from '../../constants/columns';
import { note } from '../../types';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { CustomGridToolbar } from '../CustomGridToolbar';
import { selectVisibleNotes } from '../../redux/selectors';

export const DataTable = () => {
  const apiRef = useGridApiRef();

  const notes = useAppSelector(selectVisibleNotes);
  // const archivedNotes = useAppSelector(selectArchivedNotes);
  // const archivedNotes = selectArchivedNotes(state);

  return (
    <>
      <DataGrid
        slots={{
          toolbar: CustomGridToolbar,
        }}
        apiRef={apiRef}
        autoHeight
        rows={notes}
        getRowId={(row: note) => row.id}
        // rowHeight={70}
        columns={columns}
        //

        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[5, 10, 20, 50]}
        disableRowSelectionOnClick
        // checkboxSelection
        // disableRowSelectionOnClick
        // rowSelectionModel={rowSelectionModel}
        // keepNonExistentRowsSelected
        //
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
        }}
      />
    </>
  );
};
