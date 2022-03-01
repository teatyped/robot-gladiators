// get playerName 
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 50;
var playerMoney = 10;
// display player info in log 
console.log(playerName,playerHealth, playerAttack,playerMoney);



var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;



// for(var i = 0; i < enemyNames.length; i++) {
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i] + " is at " + i + " index");
//   }

var fight = function(enemyName){
    // repeat and execute as long as the enemy-robot is alive 
    while(enemyHealth > 0) {
        // place fight function code block here . . .
    
        // fight or skip?
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        console.log("player wants to " + promptFight);
        if (promptFight === "fight" || promptFight === "FIGHT"){
        
            //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
            enemyHealth = enemyHealth - playerAttack;
            // Log a resulting message to the console so we know that it worked.
            console.log (
                playerName + " attacked" + enemyName + "." + enemyName +" now has " + enemyHealth + " health remaining."
                );
            // check enemy health 
            if (enemyHealth <= 0){
                window.alert(enemyName + "has died!");
            }
            else{
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
            playerHealth = playerHealth - enemyAttack;
            // Log a resulting message to the console so we know that it worked.
            console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
            //check players health
            if (playerHealth <= 0){
                window.alert(playerName  + "has died!");
            }
            else{
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }
        else if (promptFight === "skip" || promptFight === "SKIP"){
            //confirm player wants to skip
            var confirmSkip =window.confirm("Are you sure you'd like to quit?");
            // if yes(true), leave fight
            if(confirmSkip){
                window.alert(playerName + " has decided to skip this fight Goodbye!");
            // take skip fee
            playerMoney = playerMoney - 2;
            }
            else{
                fight();
            }
        
        }
        else{
            window.alert("You need to choose a vaild option. Try again!");
        }
    }
};

//insert for loop here
for(var i = 0; i < enemyNames.length; i++){
    debugger;
    var pickedEnemyName = enemyNames[i];
    // call fight function with enemy name/ reset health of new
    enemyHealth =50;
    fight(pickedEnemyName);
}