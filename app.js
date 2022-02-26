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













const imageIcons=document.querySelectorAll('.product-icon');
const imagetitle=document.querySelector('.title-image');

let boxTitle=document.getElementById('box-title');
let boxText1=document.getElementById('box-text1');
let boxText2=document.getElementById('box-text2');
let boxText3=document.getElementById('box-text3');



const leftBtn=document.querySelector('.left');
const RightBtn=document.querySelector('.right');

let productImage=[
  {
    img:'https://www.365dropship.com/wp-content/uploads/2020/06/3-1536x863.jpg',
    id:1
  },
  {
    img:'	https://www.365dropship.com/wp-content/uploads/2020/06/filter1-1536x863.jpg',
    id:2
  },
  {
    img:'	https://www.365dropship.com/wp-content/uploads/2020/06/Sync-1536x863.png',
    id:3
  },{
    img:'https://www.365dropship.com/wp-content/uploads/2020/06/3-1536x863.jpg',
    id:1
  },
];


let productTxt=[
  {
    h1: "Advanced UI",
    p1: "In the 365DROPSHIP platform you’ll find the most user-friendly UI enabling easy product search, inventory management, and order placement.",
    p2: "Our User Interface is simple and sophisticated at the same time. Using a modern product search system, you can find anything you need in seconds.",
    p3: "Here you can easily manage your inventory and place the desired orders. The interface is adjusted to your needs and designed so that everything is straightforward from your first click. Our advanced user interface saves your time and allows you to easily surf through the dropship platform features."
  },
  {
    h1: "Activity Dashboard",
    p1: "Track all of your activity in one place with the 365DROPSHIP dashboard, learn from your activity, and optimize it accordingly.",
    p2: "You can control every step of your dropship business and manage all the details, especially, if you are relying on the dropshipping platform data.",
    p3: "Using these features, you’ll be able to find new relevant inventory and decide your next step wisely."
  },
  {
    h1: "Dropship Products sync functionality",
    p1: "Easily sync 365DROPSHIP products into your online shop. Manage your process manually or automatically, exporting all product details.",
    p2: "By synchronizing your 365DROPSHIP account to your online shop, you save time and effort. All dropship product details will be automatically transported and you won’t have to worry about it.",
    p3: "If you want to change some details or present your product differently, you can choose to enter all the information manually, so you decide what should be featured on the page of each product."
  },
  {
    h1: "Transaction management board",
    p1: "Get access to see all of your transactions in one place and be in control of your purchases.",
    p2: "Keep your transactions on the palm of your hand – manage your incomes and outcomes, followup on your finances flow, and stay aware of every little thing in your virtual pocket.",
    p3: "This will help you to monitor the small details, work out your financial plan, and anticipate the bright future of your dropshipping business."
  },
  {
    h1: "Supply Management & Support",
    p1: "Easily access all dropshipping suppliers products from ONE point of contact without the hustle of direct contact with each supplier separately.",
    p2: "Professional account management and support 24/7, 365 days a year!",
    p3: ""
  },
  {
    h1: "Dropship Account setup",
    p1: "Setup your dropship account details and billing information.",
    p2: "Here you can enter and save all the information needed for your future transactions, follow up on your subscription plan, your subscription invoices, and upgrade your dropship account if needed.",
    p3: ""
  }
];


function imagesTlt(url){
  let count = document.createElement('img');
  count.src=url;
  return count;
}


function imageProduct(index){
 let currentside=productImage[index];
 imagetitle.innerHTML="";
 imagetitle.appendChild(imagesTlt(currentside.img));
}
let counter =0;


function Container(index){
  let currentIndex=productTxt[index];
  boxTitle.innerHTML=currentIndex.h1;
  boxText1.innerHTML=currentIndex.p1;
  boxText2.innerHTML=currentIndex.p2;
  boxText3.innerHTML=currentIndex.p3;
}


let sectionIndex=0;

Container(sectionIndex);

imageIcons.forEach(function(indicator,ind){
  indicator.addEventListener('click',function(){
    sectionIndex=ind;
    document.querySelector('.selected').classList.remove('selected');
    indicator.classList.add('selected');
    Container(sectionIndex);
    
  });
})


imageProduct(counter);

function buttonLeft(){
  if(counter==0){
    counter=productImage.length-1;
  }

  if(counter!==0){
    counter--;
    imageProduct(counter);
  }
}

function buttonRight(){
  if(counter<productImage.length-1){
    counter++;
    imageProduct(counter);
  }
  if(counter===productImage.length-1){
    counter=0;
  }
}

leftBtn.addEventListener('click',buttonLeft);

RightBtn.addEventListener('click',buttonRight);
setInterval(() => {
  buttonRight();
}, 4000);




const tapTitle = document.querySelectorAll('.tap-title');

let VcRowTxtwww1=document.querySelector('.Vc-row_Text1');
let VcRowTxttt2=document.querySelector('.Vc-row_Text2');
let VcRowTxtxx3=document.querySelector('.Vc-row_Text3');
let VcRowTxts4=document.querySelector('.Vc-row_Text4');

let VcArray=[VcRowTxtwww1,VcRowTxttt2,VcRowTxtxx3,VcRowTxts4];

let numberResult=0;


tapTitle.forEach(function(Title,titleInd){
  Title.addEventListener('click',function(){
    numberResult=titleInd;
    document.querySelector('.change-style').classList.remove('change-style');
    Title.classList.add('change-style');
    document.querySelector('.Vc-row_Text1').classList.remove('Vc-row_Text1');
    VcArray[numberResult].classList.add('Vc-row_Text1');

  })
})