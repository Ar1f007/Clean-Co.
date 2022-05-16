import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { useId } from 'react';
import { publicRoutes } from './routes';

function App() {
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
