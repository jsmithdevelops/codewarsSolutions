//create function that takes in health and new damage. Return new health, health cannot go below zero

function combat(health, damage) {
  console.log(health - damage > 0 ? health - damage : 0)
}

combat(2, 5)
