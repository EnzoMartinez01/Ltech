import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import PrincipalComponent from './Components/PrincipalView/PrincipalComponent';
import ServicesComponent from './Components/ServicesView/ServicesComponent';
import ContactComponent from './Components/ContactView/ContactComponent';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<PrincipalComponent />} />
        <Route path='servicios' element={<ServicesComponent />} />
        <Route path='contacto' element={<ContactComponent />} />
      </Routes>
    </>
  );
}

export default App;
