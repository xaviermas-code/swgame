import { canvas,c } from "./game-sw.js";


class Enemy {
constructor() {
    this.velocity = {
        x:0,
        y:0
    }
    const image = new Image()
    image.src="./resources/enemy1.png";
    image.onload = () => {
            const scale= 0.1;
            this.image = image;
            this.height = image.height * scale;
            this.width =image.width * scale;
            this.position = {
                x: canvas.width/2 - this.width/2,
                y: 100
            }
        }
    }
    draw(c) {
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



const enemy = new Enemy();

function updateEnemies() {
    enemy.update();
}




export {updateEnemies};




