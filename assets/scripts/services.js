// Relevant Variables
let cardSelected = 1;
let cardsVisible = 2;

const cards = document.querySelectorAll('.services-carousel-card');

// Create a condition that targets viewports at least 768px wide
const screenSmall = window.matchMedia('(min-width: 576px)');
const screenMedium = window.matchMedia(
  '(max-width: 768px) and (min-width: 577px)'
);
const screenLarge = window.matchMedia(
  '(max-width: 992px) and (min-width: 769px)'
);
const screenXLarge = window.matchMedia(
  '(max-width: 1200px) and (min-width: 993px)'
);

function handleSmallScreen(e) {
  if (e.matches) {
    cardsVisible = 2;
    console.log(cardsVisible);
    updateCardsVisible();
  }
}
function handleMediumScreen(e) {
  if (e.matches) {
    cardsVisible = 2;
    console.log(cardsVisible);
    updateCardsVisible();
  }
}
function handleLargeScreen(e) {
  if (e.matches) {
    cardsVisible = 3;
    console.log(cardsVisible);
    updateCardsVisible();
  }
}
function handleXLargeScreen(e) {
  if (e.matches) {
    cardsVisible = 4;
    console.log(cardsVisible);
    updateCardsVisible();
  }
}

// Register event listener
screenSmall.addEventListener('change', handleSmallScreen);
screenMedium.addEventListener('change', handleMediumScreen);
screenLarge.addEventListener('change', handleLargeScreen);
screenXLarge.addEventListener('change', handleXLargeScreen);

handleSmallScreen(screenSmall);
handleMediumScreen(screenMedium);
handleLargeScreen(screenLarge);
handleXLargeScreen(screenXLarge);

// Update cards visible for the first time
updateCardsVisible();

cards.forEach((el) => {
  el.addEventListener('click', (e) => {
    cards.forEach((otherEl) => {
      otherEl.classList.remove('services-card-invert');
    });

    // Updated the currently selected card id
    let cardSelected = getCardNum(el);

    el.classList.add('services-card-invert');
  });
});

function getCardNum(cardElement) {
  return parseInt(cardElement.id.replace('card-', ''));
}

function updateCardsVisible() {
  if (isNaN(cardsVisible) || cardsVisible < 1) {
    console.error(
      'Internal Error: cardsVisible has an incorrect value -- ' + cardsVisible
    );
  }

  let cardsShown = 0;

  cards.forEach((card) => {
    let cardNum = getCardNum(card);

    if (!card.classList.contains('hidden')) {
      card.classList.add('hidden');
    }

    if (cardNum >= cardSelected) {
      if (cardsShown < cardsVisible) {
        card.classList.remove('hidden');
        cardsShown++;
      }
    }
  });
}
