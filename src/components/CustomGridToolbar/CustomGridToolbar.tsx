import { Button } from '@mui/material';
import ArchiveIcon from '@mui/icons-material/Archive';
import { GridToolbarContainer } from '@mui/x-data-grid';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectShouldShowArchived } from '../../redux/selectors';
import { toggleShouldShowArchived } from '../../redux/notesSlice';

export const CustomGridToolbar = () => {
  const shouldShowArchivedNotes = useAppSelector(selectShouldShowArchived);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    return dispatch(toggleShouldShowArchived());
  };

  const isClicked = shouldShowArchivedNotes ? 'error' : 'inherit';
  return (
    <GridToolbarContainer>
      <Button
        onClick={handleClick}
        size="medium"
        variant="contained"
        endIcon={<ArchiveIcon color={isClicked} />}
      >
        Archived
      </Button>
    </GridToolbarContainer>
  );
};
