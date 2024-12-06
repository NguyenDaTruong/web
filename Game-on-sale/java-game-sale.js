const wrapper =document.querySelector('.wrapper');
const loginlink=document.querySelector('.login-link');
const registerlink=document.querySelector('.register-link');
const btnPopup=document.querySelector('.btnLogin-popup');
const iconClose=document.querySelector('.icon-close');

registerlink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});

// nav trai

let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");

btn.onclick = function(){
    sidebar.classList.toggle("active");
}
searchBtn.onclick = function(){
    sidebar.classList.toggle("active");
}



 //quay lai dau trang 
 function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function rotate() {
  var lastChild = $('.slide div:last-child').clone();
  $('.slide div').removeClass('firstSlide')
  $('.slide div:last-child').remove();
  $('.slide').prepend(lastChild)
  $(lastChild).addClass('firstSlide')
}

window.setInterval(function(){
  rotate()
}, 4000);