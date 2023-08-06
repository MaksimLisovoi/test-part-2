import { DataGrid, GridRowSelectionModel, useGridApiRef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { columns } from '../../constants/columns';
import { note } from '../../types';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';

export const DataTable = () => {
  const apiRef = useGridApiRef();

  const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);
  // const [shouldShowWatchList, setShouldShowWatchList] = useState(false);
  // const [selectedRows, setSelectedRows] = useState<currency[]>([]);

  // if (selectedRows && selectedRows.length > 0) {
  //   localStorageService.save('selectedRows', selectedRows);
  // }

  // useEffect(() => {
  //   const selectedRowsFromLS = localStorageService.load('selectedRows') || [];

  //   setSelectedRows(selectedRowsFromLS);
  // }, []);

  // const handleSwitchWatchList = () => {
  //   setShouldShowWatchList(!shouldShowWatchList);
  // };

  const state = useAppSelector(state => state);

  console.log(state);

  return (
    <>
      <DataGrid
        // slots={{
        //   toolbar: CustomGridToolbar,
        // }}
        // slotProps={{
        //   toolbar: {
        //     handleSwitchWatchList: handleSwitchWatchList,
        //     shouldShowWatchList: shouldShowWatchList,
        //   },
        // }}
        //
        apiRef={apiRef}
        autoHeight
        rows={state}
        getRowId={(row: note) => row.id}
        // rowHeight={70}
        columns={columns}
        //
        pagination
        pageSizeOptions={[5, 10, 20, 50]}
        //
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
