import React from 'react';

function Main(){

  return (

    <main className="bg-gray-100 w-screen h-auto">

      <div className="flex flex-col justify-center w-full h-full text-center">
      
        <h1 className="text-6xl mt-8 font-merriweather font-semibold text-gray-900">Playlists mais Vistas</h1>

        <PainelTop title="Mais Recentes" />

      </div>

      <div className="flex flex-col justify-center w-full h-full text-center">

        <h1 className="text-6xl font-merriweather font-semibold text-gray-900">Outras</h1>

        <div className="flex flex-col w-2/3 mx-auto my-10 text-left bg-white border rounded shadow-md">

          <PainelOutros />
          <PainelOutros />

        </div>

      </div>

    </main>

  );

}

function PainelTop(props){

  return (

    <div className="flex flex-col w-2/3 mx-auto my-10 text-left bg-white border rounded shadow-md">

      <h1 className="text-2xl m-2 ml-3 font-montserrat text-gray-800 uppercase">{props.title}</h1>

      <div className="flex flex-col w-full h-full border-t p-6 items-stretch justify-around">

          <SubPainelTop videoname="My Puppies Video" description="Puppy placeholder foreeeeeveeeerr" />
          <SubPainelTop />
          <SubPainelTop />
          <SubPainelTop />
          <SubPainelTop />

      </div>

    </div>

  );

}

function SubPainelTop(props){

    /** @namespace props.videoname */
    /** @namespace props.description */

    return (

    <div className="flex flex-row shadow-lg border border-gray-300 rounded-lg h-auto w-auto mx-2 my-4 p-2">
        <div>
            <img className="w-40" src={require('./../../res/img/place.png')} alt="Puppy"/>
        </div>
        <div className="flex flex-col align-top items-stretch w-full ml-6">
            <h1 className="text-2xl font-medium mb-2 border-b border-gray-300">
                {props.videoname || "Video indiponível"}
            </h1>

            <p className="font-hairline text-lg"> {props.description || "Descrição indisponivel"} </p>
        </div>

    </div>

  );

}

function PainelOutros(){

  return (

    <div className="flex flex-row w-full h-full justify-center items-center p-10">

      <SubPainelOutros />
      <SubPainelOutros />
      <SubPainelOutros />
      <SubPainelOutros />

    </div>

  );

}

function SubPainelOutros(){

  return (

    <div className="max-w-sm shadow-lg h-36 mx-8">
      <img className="w-full" src={require('./../../res/img/place2.png')} alt="Puppy" />
    </div>

  );

}

export default Main;