import { canvas,c, projectiles } from "./game-sw.js";


class Enemy {
    constructor({ position }) { // <-- aceptar parámetro correctamente
    
    this.position = position;
    this.velocity = {
        x:0,
        y:0.05
    }
    const image = new Image()
    image.src="./resources/enemy1.png";
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

class Grid {
    constructor() {
        this.position = {
        x:0,
        y:0
    }
    this.velocity = {
        x:0,
        y:0
    }
    const rows = Math.floor(Math.random()*5+2)
    this.enemies = []
    for (let x=0; x < 10; x++) {
    for (let y=0; y < rows; y++) {
        this.enemies.push(
            new Enemy({
            position: {
                x: x * 150,
                y: y * 100
            }

    })
)
}}
    }
    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

    }
}

const grids = [new Grid()]

function gridAnimate() {
grids.forEach((grid) => {
grid.update()
grid.enemies.forEach((enemy)=> {
enemy.update()
        })


    })

};
function animateExplosion(position) {
 

}

function collision() {
    grids.forEach((grid) => {
        grid.enemies.forEach((enemy, i) => { 
                        projectiles.forEach((projectile, j) => {
                if (
                    projectile.position.y - projectile.radius <= enemy.position.y + enemy.height &&
                    projectile.position.x + projectile.radius >= enemy.position.x &&
                    projectile.position.x - projectile.radius <= enemy.position.x + enemy.width &&
                    projectile.position.y + projectile.radius >= enemy.position.y
                ) {
                    // Colisión detectada
                    Promise.resolve()
                    .then(() => {
                        grid.enemies.splice(i, 1);   // elimina ese enemy
                        projectiles.splice(j, 1);    // elimina ese projectile
                    })
                    .then(() => animateExplosion(enemy.position))

                }
            });
        });
    });
}
const projectilesEnemy = [];
class ProjectileEnemy {
    constructor(position, velocity, radius = 5) {
        this._position = position;
        this._velocity = velocity;
        this._radius = radius;
       
    }

    get position() {
    return this._position;
}

    get velocity() {
    return this._velocity;
}
 get radius() {
    return this._radius;
 }

    draw() {
        // Draw the bullet
    c.beginPath()
    c.arc(this._position.x, this._position.y, this._radius,0,Math.PI * 2)
    c.fillStyle = 'blue'
    c.fill()
    c.closePath()

    }

    update() {
    this.draw()
    this._position.x += this._velocity.x
    this._position.y += this._velocity.y


}


};



export {gridAnimate, grids, collision, ProjectileEnemy, projectilesEnemy};




