const header = document.querySelector('h1');
header.textContent = 'Ola Mundo!';

let myImage = document.querySelector('img');

myImage.onclick = () => {
  let mySrc = myImage.getAttribute('src');

  if(mySrc === 'images/firefox.svg') {
    myImage.setAttribute('src', 'images/firefox2.png');
  } else {
    myImage.setAttribute('src', 'images/firefox.svg');
  };
};