import React from "react";
import ReactDOM from "react-dom";

// Lista de items recebida de uma API por exemplo
const nomes = [
    "Rachel",
    "Santana",
    "Oliver",
    "Hugo",
];

// Componente que gera uma lista com os elementos recebidos externamente
function Lista(){

    let namesToRender = [];

    for(let i = 0; i < nomes.length; i++){
        namesToRender.push(
            <li key={i}>{nomes[i]}</li>
        )
    }

    return(
        <div>
            <ul>
                {namesToRender}
            </ul>
        </div>
    );
}


// Componente principal  a ser renderizado
function App() {

    return(
        <div>
            <Lista/>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));