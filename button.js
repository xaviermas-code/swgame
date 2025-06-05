

function setButton() {
return new Promise((resolve, reject) => {
const button = document.getElementById('startBtn');

button.onclick = function(){

    const audio = document.getElementById("Audio_landpage");
    audio.play().then(() => {
         audio.currentTime = 0; 
         button.style.display = 'none';
        
        resolve(); // Resolvemos la promesa después de que el audio empieza a reproducirse
        })
        .catch((error) => {
          reject(error); // Si hay un error al reproducir el audio
        });
};
   
});
};



export default setButton;