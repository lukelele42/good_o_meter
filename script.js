
console.log("It's working!");


const button = document.getElementById('myButton');

const img = document.getElementById('star');
const img2 = document.getElementById('star2');
const img3 = document.getElementById('star3');
const bottom = document.getElementById('bottom');



button.addEventListener('click', function() {
  const audio = new Audio(`victory.wav`);
  audio.play();
});




button.addEventListener('click', function() {
 
  img.src = 'star.png';
  img.style.display = 'inline-block';
  img.style.width = '200px';
  img.style.height = 'auto';


  img2.src = 'star2.png';
  img2.style.display = 'inline-block';
  img2.style.width = '200px';
  img2.style.height = 'auto';
  


  img3.src = 'star3.png';
  img3.style.display = 'inline-block';
  img3.style.width = '200px';
  img3.style.height = 'auto';
 
  bottom.style.textAlign = 'center';
  

});


