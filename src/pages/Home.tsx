import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { DataTable } from '../components/DataTable';
import { ModalAddNote } from '../components/ModalAddNote/ModalAddNote';

const Home = () => {
  return (
    <Box component="main">
      <Typography component="h1" paddingBottom={3} fontSize={40} margin="0 auto">
        Notes App
      </Typography>
      <DataTable />
      <ModalAddNote />
    </Box>
  );
};

export default Home;
