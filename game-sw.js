let c;
let sizex =100;
function workingSpace() {
const canvas = document.querySelector("canvas");

c = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;



const shipImage = new Image();
shipImage.src = "./resources/swShip.png";

const Ship = {
    armor: true,
    mobile: true,
    weapon: 'normal',
    src: shipImage,
    sizex: sizex,
    sizey:100,
    position: {
        x: innerWidth/2 - sizex/2,
        y:innerHeight -200

    },

    velocity: {
        x:0,
        y:0
    },

    rotation:0,

draw() {
    c.save()
    c.translate(this.position.x + this.sizex / 2, this.position.y + this.sizey / 2)
     c.rotate(this.rotation);
    c.drawImage(this.src, -this.sizex / 2,
        -this.sizey / 2, this.sizex, this.sizey )
    c.restore();

},

update() {
if(this.src.complete) {
    this.draw()
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
}
    },

};
shipImage.onload = () => {
        Ship.draw();
        animate();
}

const keys = {
        a: {
            pressed: false
        },
        d: {
            pressed: false
        },
        space: {
            pressed: false
        },
        w: {
            pressed: false
        },
        s: {
            pressed: false
        }
    };


addEventListener("keyup", ({key}) => {
    switch (key) {
        case "a":
            keys.a.pressed = false;
            break;
        case "d":
            keys.d.pressed = false;
            break;
        case "w":
            keys.w.pressed = false;
            break;
        case "s":
            keys.s.pressed = false;
            break;
    }
});


addEventListener("keydown",({key}) =>{
        switch (key) {
            case "a": 
            console.log("left")
            keys.a.pressed = true
            break
            case "d":
            console.log("right")
            keys.d.pressed = true
            break
            case " ":
            console.log("space")
            break
            case "w":
            keys.w.pressed = true
            break
            case "s":
            keys.s.pressed = true
    
        }
    })









function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = "black";
    c.fillRect(0,0, canvas.width, canvas.height)
    
    Ship.update()

// Movimiento horizontal
if (keys.a.pressed && Ship.position.x >=0) {
    Ship.velocity.x = -5;
    Ship.rotation = -0.15;
} else if (keys.d.pressed && Ship.position.x + Ship.sizex <= innerWidth) {
    Ship.velocity.x = 5;
    Ship.rotation = 0.15;
} else {
    Ship.velocity.x = 0;
    Ship.rotation = 0;
}

// Movimiento vertical
if (keys.w.pressed && Ship.position.y >=0) {
    Ship.velocity.y = -5;
} else if (keys.s.pressed && Ship.position.y + Ship.sizey <= innerHeight) {
    Ship.velocity.y = 5;
} else {
    Ship.velocity.y = 0;
}


};


};






export {workingSpace};