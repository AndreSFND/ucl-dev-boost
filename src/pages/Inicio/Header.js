import React from 'react';
import logo from './../../res/img/logo.png';

function Header(){

  return (

    <header className="h-screen w-screen bg-ucl">
			<div className="flex flex-col justify-center w-2/6 h-full mx-auto my-auto text-center">
        <div className="flex flex-row justify-center p-10 rounded-full border border-gray-300 bg-white shadow-lg my-5 w-64 mx-auto">
          <img src={logo} alt="Logo"/>
        </div>
        <p className="text-4xl font-merriweather font-semibold text-white">Dev.academy()</p>
        <p className="text-xl text-white font-montserrat">Dev.academy() é uma plataforma de ensino do <a class="underline" href="http://uclsanca.icmc.usp.br/" target="blank">USPCodeLab</a> que armazena vídeos e aulas do grupo. </p>
			
        <a href="#main">
          <button class="border-2 border-white bg-white text-ucl w-64 py-3 px-5 mx-auto my-10 font-semibold rounded font-montserrat text-xl">
            Ver mais
          </button>
        </a>
      </div>
		</header>

  );

}

export default Header;
