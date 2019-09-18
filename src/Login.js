import React from 'react';
import logo from './res/img/logo.png';

function Login(){

  return (

    <main class="bg-gray-100 w-screen h-screen">

      <div className="flex flex-col justify-center w-full h-full py-40">
        <div class="flex flex-row border-2 w-3/5 h-full bg-white shadow-md mx-auto">
          <div class="py-12 bg-ucl h-full w-2/6 text-center">
            <div className="flex flex-row justify-center p-10 rounded-full border border-gray-300 bg-white shadow-lg my-5 w-64 mx-auto">
              <img src={logo} alt="Logo"/>
            </div>
            <h1 class="text-4xl mt-8 font-merriweather font-semibold text-white">Dev.academy()</h1>
          </div>
          <div class="bg-white h-full w-4/6 p-8">
            <h1 class="text-4xl font-merriweather font-semibold text-gray-800">Entrar</h1>

            
          </div>
        </div>
      </div>

    </main>

  );

}

export default Login;