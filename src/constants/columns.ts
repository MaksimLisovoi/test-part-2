import { GridColDef } from '@mui/x-data-grid';

import { NoteBtnGroup } from '../components/DataTable/NoteBtnGroup';
import { renderCellExpand } from '../components/DataTable/RenderCellExpand';
import { categories } from './categories';

export const columnsSummary: GridColDef[] = [
  // { field: 'id', headerName: '#', width: 50 },
  {
    field: 'category',
    headerName: 'Note Category',
    minWidth: 150,
    flex: 1,
  },
  {
    field: 'active',
    headerName: 'Active',

    minWidth: 250,
    flex: 0.5,
  },
  {
    field: 'archived',
    headerName: 'Archived',
    minWidth: 250,
    flex: 0.5,
  },
];

export const columns: GridColDef[] = [
  // { field: 'id', headerName: '#', width: 50 },
  {
    field: 'name',
    headerName: 'Name',

    minWidth: 150,
    editable: true,
    renderCell: renderCellExpand,
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
    editable: true,
    type: 'singleSelect',
    valueOptions: categories,
  },
  {
    field: 'content',
    headerName: 'Content',
    minWidth: 150,
    flex: 1,
    editable: true,
    renderCell: renderCellExpand,
  },
  {
    field: 'dates',
    headerName: 'Dates',
    minWidth: 150,
  },

  {
    field: 'btns',
    headerName: '',
    minWidth: 150,
    renderCell: NoteBtnGroup,
  },
];
