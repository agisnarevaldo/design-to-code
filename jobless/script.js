// Task:
// Toggle active card

const cards = document.querySelectorAll(".card");

// menambahkan event listener ke setiap element "card"
cards.forEach(function(card) {
  card.addEventListener(('click'), function() {
    card.classList.toggle("actived");
  });
});
