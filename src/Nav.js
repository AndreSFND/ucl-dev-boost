import React from 'react';

function Nav(){

  return (

    <nav class="fixed bg-ucl h-24 w-screen shadow">
        <div class="flex flex-row w-full h-full border">

          <div class="w-1/6 h-full border flex items-center justify-center">
            <h1 class="text-4xl font-merriweather font-semibold text-white cursor-pointer">Dev.academy()</h1>
          </div>

          <div class="w-3/6 h-full border">
            
          </div>

          <div class="w-2/6 h-full border flex items-center justify-around">
            <h1 class="text-xl font-montserrat font-semibold text-white cursor-pointer">Início</h1>
            <h1 class="text-xl font-montserrat font-semibold text-white cursor-pointer">Entrar</h1>
            <button class="border-2 border-white-500 hover:border-white-600 bg-transparent text-white py-3 px-5 font-semibold rounded font-montserrat text-xl">
              Cadastrar
            </button>
          </div>

        </div>
    </nav>

  );

}

export default Nav;
