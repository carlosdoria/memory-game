const cards = document.querySelectorAll('.card');
const resetButton = document.getElementById('reset-game');

let firstCard, secondCard;
let hasFlippedCard = false;
let lockBoard = false;

function flipCard () {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');
  if (!hasFlippedCard) {
    hasFlippedCard = true
    firstCard = this;
    return;
};

  secondCard = this;
  hasFlippedCard = false;
  checkForMath();
};

function checkForMath () {
  if (firstCard.dataset.card === secondCard.dataset.card) {
    disableCard();
    return;
  }

  unflipCard();
};

function disableCard () {
  firstCard.removeEventListener(click, flipCard);
  secondCard.removeEventListener(click, flipCard);

  resetBoard()
};

function unflipCard () {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard()
  }, 1500);
};

function resetBoard () {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
};

function shuffle () {
  cards.forEach (card => {
    let randomPosition = Math.floor(Math.random() * 12);

    card.style.order = randomPosition;
  })
};

shuffle()

function resetGame () {
  lockBoard = true;
  cards.forEach (card => {
    card.classList.remove('flip');
  })
  setTimeout(() => {
    resetBoard();
    shuffle();
    alert('As cartas foram embaralhadas!')
  }, 1500)
}

cards.forEach(card => {
  card.addEventListener('click', flipCard)
});

resetButton.addEventListener('click', resetGame)
