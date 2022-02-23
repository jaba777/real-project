const menuBtn=document.querySelector('.menu-icon');
const headerRight=document.querySelector('.header-right');
const Menu=document.querySelector('.menu');
menuBtn.addEventListener('click',()=>{
  headerRight.classList.toggle('active');
  Menu.classList.toggle('active');
})



let Images = document.querySelector('.image-title');

let Users=[
  {
    photo:'./images/hero-1.jpg',
    id: 1
  },
  {
    photo: './images/picture.png',
    id:2
  },
  {
    photo:'./images/hero-1.jpg',
    id: 1
  }

];

let count =0;

function ImageResult(url){
  let element =document.createElement('img');
  element.src = url;
  return element;
}

function setSlider(index){
  let currentsidec= Users[index];
  Images.innerHTML = "";
  Images.appendChild(ImageResult(currentsidec.photo));
  //Images.style.backgroundimage="url('currentsidec.photo')";
}



function arrowRight(){
  if(count == Users.length -1){
    count =0;
  }
  if (count < Users.length -1){
    count ++;
    setSlider(count);
  }
  
}

setSlider(count);

setInterval(() => {
  arrowRight();
}, 4000);
