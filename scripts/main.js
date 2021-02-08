// let myImage = document.querySelector('img');
//
// myImage.onclick = function(){
//     let mySrc = myImage.getAttribute('src');
//     prompt('请输入你的名字');
//     if(mySrc === 'images/gaofen.jpg'){
//         myImage.setAttribute('src', 'images/result2.jpg');}
//     else{myImage.setAttribute('src', 'images/gaofen.jpg');
//     }
// }

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
  let myName = prompt('请输入你的名字');
  if(!myName || myName === null){
    setUserName();
  }
  else{
    localStorage.setItem('name', myName);
    myHeading.textContent = myName + "牛逼";
  }
}

if(!localStorage.getItem('name')){
  setUserName();
}else{
  let storedName = localStorage.getItem('name');
  myHeading.textContent = storedName + "牛逼"
}

myButton.onclick = function(){
  setUserName();
}
