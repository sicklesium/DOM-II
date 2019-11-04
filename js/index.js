// Your code goes here

let body = document.querySelector('body');
let header = document.querySelector('.logo-heading');
let navBar = document.querySelector('.main-navigation');
let navLinks = document.querySelectorAll('.nav-link');
let allHeader2 = document.querySelectorAll('h2');
let allHeader4 = document.querySelectorAll('h4');
let textContent = document.querySelector('.text-content');
let paragraphs = document.querySelectorAll('p');
let buttons = document.querySelectorAll('.btn');
let firstButton = document.querySelector('.btn');
let footer = document.querySelector('.footer');
let images = document.querySelectorAll('img');

// misc
window.addEventListener('resize', function(event) {
    alert("The window has been resized...");
  });

window.addEventListener('keydown', (event) => {
    let keyName = event.key;
    console.log(`${keyName}`);
 });

 body.addEventListener('dblclick', function(event) {
   event.target.style.background = 'rgb(59, 59, 59)';
   event.target.style.color = '#ffffff';
   event.target.style.textShadow = '2px 2px 3px papayawhip';
   event.stopPropagation();
 });

// buttons
buttons.forEach(node => {
  node.addEventListener('mouseenter', function(){
  event.target.style.fontSize = '2.5rem';
  event.target.style.cursor = 'crosshair';
  });
});

buttons.forEach(node => {
    node.addEventListener('mouseleave', function(){
    event.target.style.fontSize = '1.8rem';
    });
});

firstButton.addEventListener('contextmenu', function() {
  event.target.style.background = 'salmon';
});

buttons[1].addEventListener('contextmenu', function() {
  event.target.style.background = 'crimson';
});

buttons[2].addEventListener('contextmenu', function() {
  event.target.style.background = 'dodgerblue';
});


// actual content
allHeader2.forEach(node => {
  node.addEventListener('mouseover', function(event){
      event.target.style.color = 'deeppink';
      event.stopPropagation();
  });
});

allHeader2.forEach(node => {
  node.addEventListener('mouseleave', function(event){
    event.target.style.color = '#212529';
  });
});

allHeader4.forEach(node => {
    node.addEventListener('mouseover', function(event){
        event.target.style.color = 'cyan';
        event.stopPropagation();
    });
});

allHeader4.forEach(node => {
  node.addEventListener('mouseleave', function(event){
    event.target.style.color = '#212529';
  });
});

body.addEventListener('copy', function(){
    alert("Don't steal!");
})

// footer
footer.addEventListener('click', function(event){
    event.target.style.borderTop = '2px dashed red';
});

// navigation
window.addEventListener('scroll', function(){
  navBar.style.background = 'tomato';
});

navLinks.forEach(a => {
    a.addEventListener('click', function(event){
        event.preventDefault();
    })
});

// images

images.forEach(node => {
  node.addEventListener('mousedown', function(event){
        if(event.target.style.display === ''){
    event.target.style.display = 'none';
    } else {
        event.target.style.display = '';
    }
  });
});
