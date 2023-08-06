import { GridColDef } from '@mui/x-data-grid';

export const columns: GridColDef[] = [
  { field: 'id', headerName: '#', width: 50 },
  {
    field: 'name',
    headerName: 'Name',

    minWidth: 150,
  },
  {
    field: 'created',
    headerName: 'Created',

    minWidth: 150,
  },
  {
    field: 'category',
    headerName: 'Category',
    minWidth: 150,
  },
  {
    field: 'content',
    headerName: 'Content',
    minWidth: 150,
    flex: 1,
  },
  {
    field: 'dates',
    headerName: 'Dates',
    minWidth: 150,
  },
];
