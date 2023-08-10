import { Box } from '@mui/system';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArchiveIcon from '@mui/icons-material/Archive';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { deleteNote, archiveNote, setCurrentNote, toggleModalOpen } from '../../redux/notesSlice';

import { selectVisibleNotes } from '../../redux/selectors';

export const NoteBtnGroup = (params: GridRenderCellParams<any, string>) => {
  const dispatch = useAppDispatch();

  const toggleModal = () => {
    dispatch(toggleModalOpen());
  };

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

  const onClickUpdateHandler = () => {
    const { id, name, category, content, dates } = params.row;
    try {
      dispatch(setCurrentNote({ id, name, category, content, dates }));
      toggleModal();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box>
      <IconButton onClick={onClickUpdateHandler} aria-label="update">
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
