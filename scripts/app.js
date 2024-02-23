// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'img/naruto.png') {
    myImage.setAttribute ('src','img/naruto2.png');
  } else {
    myImage.setAttribute ('src','img/naruto.png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Diga seu nome.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Nada é impossível quando se tem determinação inabalável ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Nada é impossível quando se tem determinação inabalável' + storedName;
}

myButton.onclick = function() {setUserName();}
