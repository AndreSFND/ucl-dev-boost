import React from 'react';

import { Link } from 'react-router-dom';

function Nav(){

  return (
    <nav className="fixed bg-white h-24 w-screen shadow">
        <div className="flex flex-row w-full h-full">

          <div className="w-1/6 h-full border-r flex items-center justify-center">
            <Link
              to="/home">
                <h1 className="text-4xl font-merriweather font-semibold text-ucl cursor-pointer">Dev.academy()</h1>
            </Link>
          </div>

          <div className="w-3/6 h-full">
            
          </div>

          <div className="w-2/6 h-full border-l flex items-center justify-around">
            
            <Link
              to="/home">
                <h1 className="text-xl font-montserrat font-semibold text-gray-900 cursor-pointer">Início</h1>
            </Link>

            <Link
              to="/login">
                <h1 className="text-xl font-montserrat font-semibold text-gray-900 cursor-pointer">Entrar</h1>
            </Link>

            <Link
              to="signup">
               <button className="border-2 border-ucl bg-transparent text-ucl py-3 px-5 font-semibold rounded font-montserrat text-xl">
                  Cadastrar
                </button>
            </Link>
          </div>

        </div>
    </nav>

  );

}

export default Nav;
