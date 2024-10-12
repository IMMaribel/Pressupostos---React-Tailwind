import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ServiceProvider from './data/ServiceProvider'; 
import Welcome from './components/Welcome';
import Calculator from './components/Calculator';

function App() {

  return (
    <ServiceProvider>
      <Router>
          <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/calculator" element={<Calculator />} />
          </Routes>
      </Router>
    </ServiceProvider>
  );
};

export default App;
