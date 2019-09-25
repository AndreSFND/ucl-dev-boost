import React from 'react';

function Gerenciar(){

  return (

    <main class="bg-gray-100 w-screen h-screen">

      <div className="flex flex-col justify-center w-full h-full py-40">
        <div class="flex flex-row w-4/5 h-full mx-auto justify-around">

          <div class="bg-white h-full w-5/12 p-8 shadow-md border-2">

            <h1 class="text-4xl font-merriweather font-semibold text-gray-800 ">Adicionar Vídeo</h1>

            <form class="w-full max-w-xl">

              <div class="flex flex-col mt-12">

                <div class="flex items-center border-b border-b-2 border-teal-500 py-2 m-4">
                  <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-montserrat" type="text" placeholder="Título" aria-label="Titulo" />
                </div>

                <div class="flex items-center border-b border-b-2 border-teal-500 py-2 m-4 mt-8">
                  <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-montserrat" type="text" placeholder="URL" aria-label="URL" />
                </div>

                <div class="flex items-center border-b border-b-2 border-teal-500 py-2 m-4 mt-8">
                    <textarea rows="4" cols="50" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-montserrat resize-none" placeholder="Descrição" aria-label="Descrição"></textarea> 
                </div>

                <div class="flex justify-end">
                  <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-base font-semibold font-montserrat border-4 text-white py-1 px-2 rounded w-48 m-4 mt-8" type="button">
                    Adicionar
                  </button>
                </div>

              </div>

            </form>

          </div>

          <div class="bg-white h-full w-5/12 p-8 shadow-md border-2">

            <h1 class="text-4xl font-merriweather font-semibold text-gray-800 ">Meus Vídeos</h1>

          </div>

        </div>
      </div>

    </main>

  );

}

export default Gerenciar;