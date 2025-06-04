import setButton from './button.js';

// Button

document.addEventListener("DOMContentLoaded", () => {
  setButton();
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