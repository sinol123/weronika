const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const offerButton = document.getElementsByClassName('offer-button')[0];
const offerButton2 = document.getElementsByClassName('offer-button')[1];
const offerDiv = document.getElementsByClassName('offer')[0];
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

offerButton.addEventListener('click', () => {
  offerDiv.style.opacity = 1;
  offerDiv.style.transform = 'translateY(0)';
  offerDiv.style.pointerEvents = 'all';
  offerDiv.style.zIndex = 1;
})

offerButton2.addEventListener('click', () => {
  offerDiv.style.opacity = 0;
  offerDiv.style.transform = 'translateY(-144px)';
  offerDiv.style.pointerEvents = 'none';
  offerDiv.style.zIndex = 0;
})