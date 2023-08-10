import { Button, useTheme } from '@mui/material';
import ArchiveIcon from '@mui/icons-material/Archive';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { GridToolbarContainer } from '@mui/x-data-grid';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectShouldShowArchived, selectShouldShowSummary } from '../../redux/selectors';
import { toggleShouldShowArchived, toggleShouldShowSummary } from '../../redux/notesSlice';
import { useMemo } from 'react';

export const CustomGridToolbar = () => {
  const shouldShowArchivedNotes = useAppSelector(selectShouldShowArchived);
  const ShouldShowSummary = useAppSelector(selectShouldShowSummary);
  const dispatch = useAppDispatch();

  const handleClickArchived = () => {
    return dispatch(toggleShouldShowArchived());
  };

  const handleClickSummary = () => {
    return dispatch(toggleShouldShowSummary());
  };

  const isClickedArchived = shouldShowArchivedNotes ? 'error' : 'inherit';
  const isClickedSummary = ShouldShowSummary ? 'error' : 'inherit';

  const theme = useTheme();

  console.log(theme);

  return (
    <GridToolbarContainer sx={{ pb: 1 }}>
      <Button
        onClick={handleClickArchived}
        size="medium"
        variant="contained"
        endIcon={<ArchiveIcon color={isClickedArchived} />}
      >
        Archived
      </Button>
      <Button
        onClick={handleClickSummary}
        size="medium"
        variant="contained"
        endIcon={<SummarizeIcon color={isClickedSummary} />}
      >
        Summary
      </Button>
    </GridToolbarContainer>
  );
};
