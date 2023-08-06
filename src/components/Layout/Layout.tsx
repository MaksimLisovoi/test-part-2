import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar';

import { Toaster } from 'react-hot-toast';
import { Container } from '@mui/system';
import { Loader } from '../Loader/Loader';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Container
        maxWidth="xl"
        sx={{
          minHeight: '100vh',
        }}
      >
        <Suspense fallback={<Loader size={60} height="100vh" />}>
          <Outlet />
        </Suspense>
      </Container>
      <Toaster />
    </>
  );
};
