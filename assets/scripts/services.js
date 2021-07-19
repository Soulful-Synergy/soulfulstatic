// Relevant Variables
let cardSelected = 1;
let cardsVisible = 4;

const cards = document.querySelectorAll('.services-carousel-card');
const cardBodies = document.querySelectorAll('.card-body');

// Create a condition that targets viewports at least 768px wide
const screenSmall = window.matchMedia('(max-width: 576px)');
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
    cardsVisible = 3;
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

cards.forEach((el, cardIndex) => {
  el.addEventListener('click', (e) => {
    cards.forEach((otherEl) => {
      otherEl.classList.remove('services-card-invert');
    });

    // Updated the currently selected card id
    let cardSelected = getCardNum(el);

    // invert the card on the page to show that it is selected
    el.classList.add('services-card-invert');

    // display the appropriate body article for the card
    cardBodies.forEach((bodyEl, bodyIndex) => {
      if (!bodyEl.classList.contains('hidden')) {
        bodyEl.classList.add('hidden');
      }
      if (bodyIndex == cardIndex) {
        bodyEl.classList.remove('hidden');
      }
    });
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

  if (cards.length != cardBodies.length) {
    console.error(
      'Internal Error: number of cards is not the same as the number of card bodies.' +
        cards.length +
        ' vs. ' +
        cardBodies.length
    );
  }

  // make sure that the there is consistency in the amount of cards visible
  // as the user resizes the window. e.g. if card-8 of 8 cards was the last
  // selected card when only 2 cards are visible, when the user resizes the
  // window to show 4 cards, the previous two cards will also be visible.
  if (cardSelected + cardsVisible > cards.length + 1) {
    cardSelected = cards.length - cardsVisible + 1;
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

// functionality for the left and right carousel buttons

const leftBtn = document.querySelector('.services-carousel-btn-left');
const rightBtn = document.querySelector('.services-carousel-btn-right');

leftBtn.addEventListener('click', (e) => {
  const totalCards = cards.length;
  if (cardSelected > 1) {
    cardSelected--;
    updateCardsVisible();
  }
});
rightBtn.addEventListener('click', (e) => {
  const totalCards = cards.length;
  if (cardSelected < totalCards - cardsVisible + 1) {
    cardSelected++;
    updateCardsVisible();
  }
});
