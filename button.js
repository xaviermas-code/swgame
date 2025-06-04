
function setButton() {
const button = document.getElementById('startBtn');

button.onclick = function(){

    const audio = document.getElementById("Audio_landpage");
    audio.play();
    audio.currentTime = 0; 
    console.log("button")
};

};
export default setButton;