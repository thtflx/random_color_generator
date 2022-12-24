const container = document.querySelector('.random__color-container');


for (let i = 0; i < 30; i++) {
  const colorContainer = document.createElement('div');
  
  colorContainer.classList.add('random__color');

  container.appendChild(colorContainer);
}


function randomColor() {
  const chars = '0123456789abcdef';
  const colorCodeLength = 6;
  
  let colorCode = '';
  for (let i = 0; i < colorCodeLength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    // console.log(randomNum); // выводит рандомное число

    colorCode += chars.substring(randomNum, randomNum + 1);
    // console.log(colorCode); // выводит рандомный цвет
  }
  return colorCode;
}


const colorsContainer = document.querySelectorAll('.random__color');
// console.log(colorsContainer); // NodeList(30) 

function generateColor() {
  colorsContainer.forEach((colorContainer)=> {
    const newColorCode = randomColor();
    colorContainer.style.backgroundColor = `#${newColorCode}`;
  });
}

generateColor()


const body = document.querySelector('body');
const btn = document.querySelector('.random__theme');

btn.addEventListener('click',()=>{
  body.classList.toggle('dark-mode');
});