import { Button, Modal, Fade, Backdrop, Typography, Box } from '@mui/material';
import { useState } from 'react';
import { FormAddNote } from '../FormAddNote/FormAddNote';

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
  pt: 6,
  pb: 6,
};

export const ModalAddNote = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen} size="large" sx={{ mt: '16px' }} variant="contained">
        Add Note
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <FormAddNote />
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
