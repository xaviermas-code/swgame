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

draw() {
    c.drawImage(this.src, this.position.x, this.position.y, this.sizex, this.sizey )

},


    };


shipImage.onload = () => {
        Ship.draw();


}

};



export {workingSpace};