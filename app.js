//NAV const----
const nav = document.getElementById('nav');
const navButton = document.getElementById('navButton');
const menuIcon = document.querySelector('#navButton i');

//SCROLL const----
const headerText = document.getElementById('headerText');
const header = document.getElementById('header');

//DESTINATIONS const----
const destinationsList = document.getElementById('destinationsList');
const destinationsListButton = document.querySelector('.destinations');

//WRAPPER ---
const wrapper = document.getElementById('wrapper');

//NAV----
navButton.addEventListener('click', toggleClosed);

//SCROLL----
window.addEventListener('scroll', onScroll);

//DESTINATIONS event----
destinationsListButton.addEventListener('click', toggleDestinationsOpen);

//WRAPPER event ----
wrapper.addEventListener('click', function(){
  if(document.body.classList.contains('navOpen')){
    toggleClosed()
  }
})

//NAV function----
// function toggleClosed() {
//   nav.classList.toggle('closed');
//   menuIcon.classList.toggle('fi-xtluxl-three-bars');
//   menuIcon.classList.toggle('fi-ctluxl-times');
//   destinationsList.classList.remove('open')
// };

function toggleClosed() {
  document.body.classList.toggle('navOpen');
  destinationsList.classList.remove('open')
};

//SCROLL function----
function onScroll(event) {
  const scrollPosition = window.scrollY;
  if(scrollPosition > header.getBoundingClientRect().height) return;
  headerText.style.transform = `translateY(${scrollPosition/1.4}px) scale(${1-scrollPosition/1200})`;
};

//DESTINATIONS function ----
function toggleDestinationsOpen() {
  if(!document.body.classList.contains('navOpen')) return;
  
  
  destinationsList.classList.toggle('open');
  
  
}