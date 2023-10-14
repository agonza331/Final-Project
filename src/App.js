import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import EditAttraction from './components/EditForm';
import AddAttraction from './components/Form';
import AttractionsList from './pages/AttractionList';
import Navigate from './components/NavBar';

function App() {
  return (
    <div>
      <Navigate/>
      <Routes>
        <Route path="/src/pages/Home.js" element={<Home />} />
        <Route path="src/pages/About.js" element={<About/>} />
        <Route path="/src/pages/AttractionList.js" element={<AttractionsList />} />
        <Route path="/src/components/Form.js" element={<AddAttraction />} />
        <Route path="/src/components/EditForm.js" element={<EditAttraction />} />
        <Route path="/edit/:id" element={<EditAttraction />} />
      </Routes>
    </div>
  );
}

export default App;
