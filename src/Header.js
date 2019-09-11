import React from 'react';
import logo from './res/img/logo.png';

function Header(){

  return (

    <header class="bg-blue-300 h-screen w-screen">
			<div class="flex flex-col justify-center w-2/3 h-full mx-auto text-center">
        <div class="flex flex-row justify-center w-full">
          <img src={logo} alt="Logo"/>
        </div>
        <p class="text-3xl">UCL Sanca</p>
        <p class="text-base">balbalbalba</p>
			</div>
		</header>

  );

}

export default Header;
