import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { useEffect, useId } from 'react';
import { publicRoutes } from './routes';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const id = useId();
  return (
    <Navbar>
      <Routes>
        {publicRoutes.map(({ path, Component }, index) => (
          <Route key={`${id}-${index}`} path={path} element={<Component />} />
        ))}
      </Routes>
    </Navbar>
  );
}

export default App;
