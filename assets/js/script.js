var player1 = document.querySelector(".player1");
var lifeTotal = document.querySelector(".lifeTotal");
var currentLife = 20;
lifeTotal.textContent = currentLife;
var lifeUp = document.querySelector(".lifeUp");
var lifeDown = document.querySelector(".lifeDown");

player1.addEventListener("click", function (event) {
  var element = event.target;
  if (element === lifeUp) {
    currentLife++;
    lifeTotal.textContent = currentLife;
  } else if (element === lifeDown) {
    currentLife--;
    lifeTotal.textContent = currentLife;
  }
});
