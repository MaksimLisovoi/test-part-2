import { Button, Modal, Fade, Backdrop, Box } from '@mui/material';

import { FormAddNote } from '../FormAddNote';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectIsModalOpen } from '../../redux/selectors';
import { setCurrentNote, toggleModalOpen } from '../../redux/notesSlice';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'primary.tableBg',

  borderRadius: '5px',

  boxShadow: 24,
  p: 4,
  pt: 8,
  pb: 10,
};

export const ModalAddNote = () => {
  const isModalOpen = useAppSelector(selectIsModalOpen);

  const dispatch = useAppDispatch();

  const toggleModal = () => {
    dispatch(toggleModalOpen());
  };

  const closeModal = () => {
    toggleModal();
    setTimeout(function () {
      dispatch(setCurrentNote(null));
    }, 500);
  };
  return (
    <>
      <Button onClick={toggleModal} size="large" sx={{ mt: '16px' }} variant="contained">
        Add Note
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        open={isModalOpen}
        onClose={closeModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isModalOpen}>
          <Box sx={style}>
            <FormAddNote />
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
