import React, { useEffect, Suspense } from 'react';

// components
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';

// routes
import ROUTES, { RenderRoutes } from '../routes';

// Loading UI component
import LoadingCubes from '../components/LoadingCubes/LoadingCubes';

import './App.scss';
import Alert from '../components/Alert/Alert';

const App = () => {
  return (
    <>
      <div className='row'>
        <Alert />
        <NavBar />
        <main>
          <Suspense fallback={<LoadingCubes />}>
            <RenderRoutes routes={ROUTES} />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
