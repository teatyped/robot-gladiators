
var getPlayerName = function(){
  var name = "";
  while ( name === "" || name === null){
    name = prompt("What is your robots name?");
  }
  console.log("Your robot's name is " + name);
  return name;
}

var fightOrSkip = function(){
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // Conditional Recursive Function Call
  if (promptFight === "" || promptFight === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return fightOrSkip();
  }


    // if player picks "skip" confirm and then stop the loop
  if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerInfo.playerMoney = playerInfo.money - 10;
      shop();
    }
  }

}





// fight function (now with parameter for enemy's name)
var fight = function(enemy) {
  while (playerInfo.health > 0 && enemy.health > 0) {
    // ask player if they'd like to fight or run
    fightOrSkip();

    // remove enemy's health by using
    // math.max to make sure number doesn't return a  negative number.
    // using randomnumber fun to retrun a number
    var damage = randomNumber( playerInfo.attack -3, playerInfo.attack);
    enemy.health = Math.max(0, enemy.health - damage);

    console.log(
      playerInfo.Name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
    );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died!');

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    }

    // remove players's health by subtracting and using math.max to return a number < 0
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0,playerInfo.health - damage);

    console.log(
      enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  }
};
var startGame = function(){
  //reset player stats by calling the method in playerInfo
  playerInfo.reset();

// fight each enemy-robot by looping over them and fighting them one at a time
  for (var i = 0; i < enemyInfo.length; i++) {
    // if player is still alive, keep fighting
    if (playerInfo.health > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

      // pick new enemy to fight based on the index of the enemyInfo array
      var pickedEnemyObj = enemyInfo[i];

      // reset enemy.health by calling the enemy.info object and setting it with a random number between 40-60 via function
      pickedEnemyObj.health = randomNumber(40, 60);
      // debugger;

      fight(pickedEnemyObj);
      // if not at last enemy in array
      if(playerInfo.health > 0 && i < enemyInfo.length -1){
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
  if (playerInfo.health > 0 ){
    window.alert(" Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
          playerInfo.refillHealth();
        break;
      case "upgrade":
      case "UPGRADE":
          playerInfo.upgradeAttack();
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

// radomNumber function
  var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1)+ min);

    return value;
  }

// created an object to hold player info// ask for name and set stats
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function(){
      this.health = 100;
      this.money = 10;
      this.attack = 10;
    },
    refillHealth: function(){
      if (this.money <= 7){
      window.alert("Refilling players health by 20 for 7 dollars");
      this.health += 20;
      this.money -= 7;
      }
      else{
        window.alert("You dont have enough moneeey!");
      }
    },

    upgradeAttack : function(){
      if(this.money <= 7){
      window.alert("Upgrading players attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -+ 7;
      }
      else{
        window.alert("You dont have enough moneeey!")
      }
    }
  };
  // display player info in log 
  console.log(playerInfo.name,playerInfo.health, playerInfo.attack,playerInfo.money);
  
  
  var enemyInfo = [
    {
      name: "Roborto",
      attack: randomNumber(10, 14)
    },
    {
      name: "Amy Android",
      attack: randomNumber(10, 14)
    },
    {
      name: "Robo Trumble",
      attack: randomNumber(10, 14)
    }
  ];



startGame();