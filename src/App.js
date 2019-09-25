import React from 'react';

import Nav from './components/Navbar/Nav.js';
import Footer from './components/Footer/Footer.js';

import Inicio from './pages/Inicio/Inicio.js';
import Login from './pages/Login/Login.js';

function App() {

  return (
    <div>

      <Nav />
      <Inicio />
      <Footer />

    </div>
  );

}

export default App;
