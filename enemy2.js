import { Grid, Enemy, nextPhase } from "./enemies.js";   
import {c} from "./game-sw.js";


class Enemy2 extends Enemy {
  constructor(position, velocity) {
    super(position, velocity); // If there is more parameters in super goes in one line super(name, certifications,...)
    const image = new Image()
    image.src="./resources/enemy2.png";
    image.onload = () => {
            const scale= 0.1;
            this.image = image;
            this.height = image.height * scale;
            this.width =image.width * scale;
            this.position = {
                x: this.position.x,
                y: this.position.y
            }
        }
  }
  draw() {
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);

    }
    update() {
        if(this.image) {
    this.draw(c)
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
}
    }
    
}

class Grid2 extends Grid {
  constructor(position, velocity) {
    super(position, velocity); // If there is more parameters in super goes in one line super(name, certifications,...)
   this.enemies2 = []
    for (let x=0; x < 4; x++) {
   
        this.enemies2.push(
            new Enemy2({
            position: {
                x: x * 400,
                y: 0
            }

    })
)
}}
    
    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

    }
  }


const grids = [new Grid2()]

function gridAnimate2() {
grids.forEach((grid) => {
grid.update()
grid.enemies2.forEach((enemy)=> {
enemy.update()
        })


    })

};


 
let triger = false

async function nextPhaseImport() {
  let nextEnemy = await nextPhase
  if (nextEnemy) {
    console.log("nextphase")
    
    console.log("Next phase")
    const grid2 = new Grid2({ x: 0, y: 0 }, { x: 0, y: 0.1 });
    grids.push(grid2);
    triger = true;
  }
 
}


nextPhaseImport();

export {gridAnimate2, triger};