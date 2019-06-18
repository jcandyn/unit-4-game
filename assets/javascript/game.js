$(document).ready(function() {
var characters = {
    "Spongebob": {
      name: "Spongebob",
      health: 120,
      attack: 8,
      imageUrl: "assets/images/spongebobs.jpg",
      enemyAttackBack: 15
    },
    "Patrick": {
      name: "Patrick",
      health: 100,
      attack: 14,
      imageUrl: "././assets/images/patrick.jpeg",
      enemyAttackBack: 5
    },
    "Sandy": {
      name: "Sandy",
      health: 160,
      attack: 8,
      imageUrl: "assets/images/sandy.jpg",
      enemyAttackBack: 20
    },
    "Plankton": {
      name: "Plankton",
      health: 180,
      attack: 7,
      imageUrl: "assets/images/plankton.jpg",
      enemyAttackBack: 25
    }
  };


var attacker;
  // Populated with all the characters the player didn't select.
  var combatants = [];
  // Will be populated when the player chooses an opponent.
  var defender;
  // Will keep track of turns during combat. Used for calculating player damage.
  var turnCount = 1;
  // Tracks number of defeated opponents.
  var killCount = 0


  var renderCharacter = function(character, renderArea) {
    // This block of code builds the character card, and renders it to the page.
    var charDiv = $("<div class='character' data-name='" + character.name + "'>");
    var charName = $("<div class='character-name'>").text(character.name);
    var charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageUrl).addClass("pic");
    var charHealth = $("<div class='character-health'>").text(character.health);
    charDiv.append(charName).append(charImage).append(charHealth);
    $(renderArea).append(charDiv);
  };

  var initializeGame = function() {
    // Loop through the characters object and call the renderCharacter function on each character to render their card.
    for (var key in characters) {
      renderCharacter(characters[key], "#characters-to-choose");
    }
  };

  initializeGame();

  var updateCharacter = function(charObj, areaRender) {
    // First we empty the area so that we can re-render the new object
    $(areaRender).empty();
    renderCharacter(charObj, areaRender);
  };
})
