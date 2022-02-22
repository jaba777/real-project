const menuBtn=document.querySelector('.menu-icon');
const headerRight=document.querySelector('.header-right');
const Menu=document.querySelector('.menu');
menuBtn.addEventListener('click',()=>{
  headerRight.classList.toggle('active');
  Menu.classList.toggle('active');
})