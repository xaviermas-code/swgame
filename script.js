import setButton from './button.js';
import { workingSpace, gameEndPromise } from './game-sw.js';

//const {text} = require('./text_starwars.js');
// Alternativa para importar todo import * as config from './config.js';
// Button


setButton().then(() => {
  console.log("Botón presionado y audio iniciado");
  // Aquí puedes continuar con otra lógica
  const text = document.getElementById('swText');
  text.style.display ="block";
  const canva = document.getElementById('canvas');
  
 setTimeout(() => {
      workingSpace();
     
       text.style.display ="none";
       canva.style.display ="block"
      }, 5000);
  
}).catch((error) => {
  console.error("Error al activar el botón:", error);
});


async function EndGame(){

  let final = await gameEndPromise
  if(final===true){
    const canva2 = document.getElementById('canvas');
    canva2.style.display ="none";
    console.log('game over')
    const textEndgame = document.createElement("h1");
    textEndgame.textContent = "Game Over"
    const container = document.getElementById("containerEndGame")
    container.appendChild(textEndgame)
}

}
EndGame()


