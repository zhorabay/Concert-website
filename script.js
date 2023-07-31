const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active');
});

const guests = [
  {
    name: 'KHALID',
    imageBg: 'images/grey-chess-bg.png',
    image: 'images/Khalid.webp',
    job: 'Singer',
    text: 'A night of alternative pop music performed for you by guest singers',
  },
  {
    name: 'Rosa Linn',
    imageBg: 'images/grey-chess-bg.png',
    image: 'images/rosa.jpeg',
    job: 'Singer',
    text: 'A night of alternative pop music performed for you by guest singers',
  },
  {
    name: 'Cat Burns',
    imageBg: 'images/grey-chess-bg.png',
    image: 'images/catburns.jpeg',
    job: 'Singer',
    text: 'A night of alternative pop music performed for you by guest singers',
  },
  {
    name: 'Dylan',
    imageBg: 'images/grey-chess-bg.png',
    image: 'images/dylan.jpeg',
    job: 'Singer',
    text: 'A night of alternative pop music performed for you by guest singers',
  },
  {
    name: 'Maisie Peters',
    imageBg: 'images/grey-chess-bg.png',
    image: 'images/maisie.jpeg',
    job: 'Singer',
    text: 'A night of alternative pop music performed for you by guest singers',
  },
  {
    name: 'Cian Ducrot',
    imageBg: 'images/grey-chess-bg.png',
    image: 'images/Cian.jpeg',
    job: 'Singer',
    text: 'A night of alternative pop music performed for you by guest singers',
  },
];

const guestList = document.querySelector('.guests');
const guestHeading = document.createElement('h2');
guestHeading.classList.add('guest-heading');
guestHeading.innerText = 'Guest Singers';
guestList.appendChild(guestHeading);
const guestDivider = document.createElement('div');
guestDivider.classList.add('divider');
guestList.appendChild(guestDivider);
const guestDiv = document.createElement('div');
guestDiv.classList.add('guest-div');
guestList.appendChild(guestDiv);

  guests.forEach(guest => { // eslint-disable-line
  const guestCard = document.createElement('div');
  guestCard.classList.add('guest-card');
  guestCard.innerHTML = `
      <div class="guest-images">
        <img class="guest-image-bg" src=${guest.imageBg} alt="background_image">
        <img class="guest-image" src=${guest.image} alt="singer_image">
      </div>
      <div class="guest-details">
        <h3 class="guest-name">${guest.name}</h3>
        <p class="guest-job">${guest.job}</p>
        <div class="guest-divider-grey"></div>
        <p class="guest-text">${guest.text}</p>
      </div>
    `;
  guestDiv.appendChild(guestCard);
});