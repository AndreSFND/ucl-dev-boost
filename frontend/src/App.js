import React from 'react';

import Nav from './components/Navbar/Nav.js';

import Inicio from './pages/Inicio/Inicio.js';
import Login from './pages/Login/Login.js';
import Cadastro from './pages/Cadastro/Cadastro.js';
import Gerenciar from './pages/Gerenciar/Gerenciar.js';

import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route path="/home" component={Inicio} exact />
          <Route path="/login" component={Login} exact/>
          <Route path="/signup" component={Cadastro} exact/>
          <Route path="/manage" component={Gerenciar} exact/>
          <Redirect to="/home" exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );

}

export default App;
