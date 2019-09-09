import React from 'react';

function Main(){

  return (

    <main class="bg-gray-100 w-screen h-auto">

      <div class="flex flex-col justify-center w-full h-full text-center">
      
        <h1 class="text-6xl mt-8 font-serif font-semibold text-gray-900">Playlists mais Vistas</h1>

        <PainelTop title="HTML" />
        <PainelTop title="JS" />

      </div>

      <div class="flex flex-col justify-center w-full h-full text-center">

        <h1 class="text-6xl font-serif font-semibold text-gray-900">Outras</h1>

        <div class="flex flex-col w-2/3 mx-auto my-10 text-left bg-white border rounded shadow-md">

          <PainelOutros />
          <PainelOutros />

        </div>

      </div>

    </main>

  );

}

function PainelTop(props){

  return (

    <div class="flex flex-col w-2/3 mx-auto my-10 text-left bg-white border rounded shadow-md">

      <h1 class="text-2xl m-2 ml-3 font-sans text-gray-800 uppercase">{props.title}</h1>

      <div class="flex flex-row w-full h-full border-t">

        <div class="flex flex-row justify-center items-center w-5/6 h-48">
        
          <SubPainelTop />
          <SubPainelTop />
          <SubPainelTop />
          <SubPainelTop />
        
        </div>

        <div class="flex flex-row justify-center items-center w-1/6 h-48">
				
            <button class="border-2 border-blue-500 hover:border-blue-600 bg-transparent text-blue-600 hover:text-blue-700 py-3 px-5 font-semibold rounded font-sans">
              Ver mais
            </button>
          
          </div>

      </div>

    </div>

  );

}

function SubPainelTop(props){

  return (

    <div class="max-w-sm shadow-lg h-auto mx-8">
      <img class="w-full" src={require('./res/img/place.png')} alt="Puppy" />
    </div>

  );

}

function PainelOutros(){

  return (

    <div class="flex flex-row w-full h-full justify-center items-center p-10">

      <SubPainelOutros />
      <SubPainelOutros />
      <SubPainelOutros />
      <SubPainelOutros />

    </div>

  );

}

function SubPainelOutros(){

  return (

    <div class="max-w-sm shadow-lg h-36 mx-8">
      <img class="w-full" src={require('./res/img/place2.png')} alt="Puppy" />
    </div>

  );

}

export default Main;