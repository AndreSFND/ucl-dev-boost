import React from 'react';
import logo from './res/img/logo.png';

function Header(){

  return (

    <header className="h-screen w-screen bg-ucl">
			<div className="flex flex-col justify-center w-1/6 h-full mx-auto my-auto text-center">
        <div className="flex flex-row justify-center p-10 rounded-full border border-gray-300 bg-white shadow-lg">
          <img src={logo} alt="Logo"/>
        </div>
        <p className="text-3xl">UCL Sanca</p>
        <p className="text-base">balbalbalba</p>
			</div>
		</header>

  );

}

export default Header;
