import React from 'react';
import logo from './../../res/img/logo.png';

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
            <h1 class="text-4xl font-merriweather font-semibold text-gray-800 ">Entrar</h1>

            <form class="w-full max-w-xl">

              <div class="flex flex-col mt-12">

                <div class="flex items-center border-b border-b-2 border-teal-500 py-2 m-4">
                  <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-montserrat" type="text" placeholder="Email" aria-label="Email" />
                </div>

                <div class="flex items-center border-b border-b-2 border-teal-500 py-2 m-4 mt-8">
                  <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-montserrat" type="password" placeholder="*****" aria-label="Senha" />
                </div>

                <div class="flex justify-end">
                  <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-base font-semibold font-montserrat border-4 text-white py-1 px-2 rounded w-48 m-4 mt-8" type="button">
                    Entrar
                  </button>
                </div>

              </div>

            </form>

          </div>
        </div>
      </div>

    </main>

  );

}

export default Login;