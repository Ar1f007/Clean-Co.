import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { About, Contact, Home, Login, Services } from './pages';

function App() {
  return (
    <Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Navbar>
  );
}

export default App;
