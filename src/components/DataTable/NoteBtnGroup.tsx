import { Box } from '@mui/system';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArchiveIcon from '@mui/icons-material/Archive';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { useAppDispatch } from '../../redux/hooks';
import { deleteNote, archiveNote } from '../../redux/notesSlice';

export const NoteBtnGroup = (params: GridRenderCellParams<any, string>) => {
  const dispatch = useAppDispatch();
  //   console.log(params.id);

  const onClickDeleteHandler = () => {
    try {
      dispatch(deleteNote(params.row.id));
    } catch (error) {
      console.log(error);
    }
  };

  const onClickArchiveHandler = () => {
    try {
      dispatch(archiveNote(params.row.id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box>
      <IconButton aria-label="update">
        <EditIcon />
      </IconButton>
      <IconButton onClick={onClickDeleteHandler} aria-label="delete">
        <DeleteOutlineIcon />
      </IconButton>
      <IconButton onClick={onClickArchiveHandler} aria-label="archive">
        <ArchiveIcon />
      </IconButton>
    </Box>
  );
};
