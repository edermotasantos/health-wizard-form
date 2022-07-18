import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './pages/Form';
import Patient from './pages/Patient';
import Patients from './pages/Patients';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Form />} />
        <Route path="usuario/:id" element={<Patient />} />
        <Route path="usuarios" element={<Patients />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
