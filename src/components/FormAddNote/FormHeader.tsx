import { Typography } from '@mui/material';

export const FormHeader = ({ modalHeader }: any) => {
  return (
    <Typography
      id="transition-modal-title"
      variant="h5"
      component="h2"
      sx={{ textAlign: 'center', mb: 7, fontSize: '30px' }}
    >
      {modalHeader}
    </Typography>
  );
};
