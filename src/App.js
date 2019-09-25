import React from 'react';

import Nav from './components/Navbar/Nav.js';
import Footer from './components/Footer/Footer.js';

import Inicio from './pages/Inicio/Inicio.js';
import Login from './pages/Login/Login.js';
import Cadastro from './pages/Cadastro/Cadastro.js';
import Gerenciar from './pages/Gerenciar/Gerenciar.js';

function App() {

  return (
    <div>

      <Nav />
      <Gerenciar />
      <Footer />

    </div>
  );

}

export default App;
