// get playerName 
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
// display player info in log 
console.log(playerName,playerHealth, playerAttack,playerMoney);



var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 13;

// fight function (now with parameter for enemy's name)
var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  }
};
var startGame = function(){
  //reset player stats
  playerHealth =100;
  playerAttack =10;
  playerMoney =10;

// fight each enemy-robot by looping over them and fighting them one at a time
  for (var i = 0; i < enemyNames.length; i++) {
    // if player is still alive, keep fighting
    if (playerHealth > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];

      // reset enemyHealth before starting new fight
      enemyHealth = 50;
      // debugger;

      fight(pickedEnemyName);
      // if not at last enemy in array
      if(playerHealth > 0 && i < enemyNames.length -1){
        var storeConfirm = window.confirm("the fight is over, visit the store before next round?");
        if (storeConfirm){
          shop();
        }
        
      }
    }
    // if player isn't alive, stop the game
    else {
      window.alert('You have lost your robot in battle! Game Over!');
      break;
    }
  }
    // call endGame fun
    endGame();
};


var endGame = function(){
  if (playerHealth > 0 ){
    window.alert(" Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  }
  else{
    window.alert("You've lost your robot in battle. =(")
  }

  var playAgainconfirm = window.confirm("Would you like to play again?");
  if(playAgainconfirm){
    //restart game
    startGame();
  }
  else{
    window.alert("Thank you for playing robot Gladiators! Come back soon");
  }

  
};


//shop
 var shop = function (){

  var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
  
  switch(shopOptionPrompt){
      case "refill":
      case "REFILL":
        if (playerMoney >= 7){
          window.alert("Refilling players health by 20 for 7 dollars");
          playerHealth = playerHealth + 20;
          playerMoney = playerMoney - 7;
        }
        else{
          window.alert("You dont have enough money!");
        }
        break;

      case "upgrade":
      case "UPGRADE":
          if(playerMoney >= 7){
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
          }
          else{
            window.alert("You dont have enough money!");
          }
        break;

      case "leave":
      case "LEAVE":
        window.alert("leaving the store.");
        break;
      default:
        window.alert("your did not pick a valid option. Try again.");
        shop();
        break;
  }

  };

startGame();