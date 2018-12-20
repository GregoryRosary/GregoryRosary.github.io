var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:900,y:groundY}
                
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
        var enemy =  game.createGameItem('enemy',25);
            var redSquare = draw.rect(50,50,'red');
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = 400;
            enemy.y = groundY-50;
            game.addGameItem(enemy);
            enemy.velocityX = 1;
            enemy.rotationalVelocity = 10;
            
        function createSawBlade(x,y) {
    // your code goes here
    var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        myObstacle.x = x;
        myObstacle.y = y;
        game.addGameItem(myObstacle); 
        var obstacleImage = draw.bitmap('img/sawblade.png');
        myObstacle.addChild(obstacleImage);
        
        obstacleImage.x = -25;
        obstacleImage.y = -25;
}  

        function createEnemy(x, y) {
    // all code from TODO 11 and 12
    createEnemy(400,groundY-10);
    createEnemy(800,groundY-100);
    createEnemy(1200,groundY-50);
    
    
}
 for(var i = 0; i < levelData.gameItems.length; i++){
     createSawBlade(levelData.gameItems[i].x, levelData.gameItems[i].y)
 }
        function createBox(x,y) {
    // ????
};
        createBox(100,200);
        
        {type: 'box',x:100,y:200}

    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}