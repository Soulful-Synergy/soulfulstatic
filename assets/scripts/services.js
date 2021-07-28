// Relevant Variables
let cardSelected = 1;
let cardsVisible = 4;
let visibleCardElements = [];

const cards = document.querySelectorAll('.services-carousel-card');
const cardBodies = document.querySelectorAll('.card-body');

const screenXSmall = window.matchMedia('(max-width: 400px)');
const screenSmall = window.matchMedia(
  '(max-width: 576px) and (min-width: 401px)'
);
const screenMedium = window.matchMedia(
  '(max-width: 768px) and (min-width: 577px)'
);
const screenLarge = window.matchMedia(
  '(max-width: 992px) and (min-width: 769px)'
);
const screenXLarge = window.matchMedia(
  '(max-width: 1200px) and (min-width: 993px)'
);

function handleXSmallScreen(e) {
  if (e.matches) {
    console.log('here');
    cardsVisible = 1;
    console.log(cardsVisible);
    updateCardsVisible();
  }
}

function handleSmallScreen(e) {
  if (e.matches) {
    console.log('not here');
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
screenXSmall.addEventListener('change', handleXSmallScreen);
screenSmall.addEventListener('change', handleSmallScreen);
screenMedium.addEventListener('change', handleMediumScreen);
screenLarge.addEventListener('change', handleLargeScreen);
screenXLarge.addEventListener('change', handleXLargeScreen);

handleXSmallScreen(screenXSmall);
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
    cardSelected = getCardNum(el);

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

  // Correct amount of cards will be shown as the window is resized:
  // e.g. if card-8 of 8 cards was the last selected card when only
  // 2 cards are visible, when the user resizes the window to
  // show 4 cards, the previous two cards will also be visible.
  if (cardSelected < 1) cardSelected = 1;

  if (cardSelected + cardsVisible > cards.length + 1) {
    cardSelected = cards.length - cardsVisible + 1;
  }

  let cardsShown = 0;
  visibleCardElements = [];

  cards.forEach((card) => {
    let cardNum = getCardNum(card);

    if (!card.classList.contains('hidden')) {
      card.classList.add('hidden');
    }

    if (cardNum >= cardSelected) {
      if (cardsShown < cardsVisible) {
        card.classList.remove('hidden');
        visibleCardElements.push(card);
        cardsShown++;
      }
    }
  });
}

// functionality for the left and right carousel buttons

const leftBtn = document.querySelector('.services-carousel-btn-left');
const rightBtn = document.querySelector('.services-carousel-btn-right');

leftBtn.addEventListener('click', (e) => {
  cardSelected -= cardsVisible;
  updateCardsVisible();
});
rightBtn.addEventListener('click', (e) => {
  cardSelected += cardsVisible;
  updateCardsVisible();
});
