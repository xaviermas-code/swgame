import setButton from './button.js';
//const {text} = require('./text_starwars.js');
// Alternativa para importar todo import * as config from './config.js';
// Button


setButton().then(() => {
  console.log("Botón presionado y audio iniciado");
  // Aquí puedes continuar con otra lógica
  const text = document.getElementById('swText');
  text.style.display ="block";
 setTimeout(() => {
        console.log("trying test")
      }, 13000);
  
}).catch((error) => {
  console.error("Error al activar el botón:", error);
});

// Ship

const Ship = {
    armor: true,
    mobile: true,
    weapon: 'normal',

    movement() {


    }


}




// Bombs

class Enemy {
    constructor(name) {
        this._name= name;
        this._behaviour;
        this._size;
    }

    get name(){
        return this.name;
    }
    get size() {
        return this.size;
    }
    behavious() {

    }
}
class EnemyShip extends Enemy {
    constructor(name, sizeShipX, sizeShipY) {
      super(behaviour);
      this._sizeShipX =sizeShipX;
      this._sizeShipY =sizeShipY;
    }
    behaviour_EShip() {

    }
  }

const bomb = new Enemy('Bomb');

const EShip = new Enemy('EShip');