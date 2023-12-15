var ctx = document.getElementById("ctx").getContext("2d"); 
ctx.font = '30px Arial';
 
var HEIGHT = 500;
var WIDTH = 500;
var message = 'Bouncing';
 
//player
var player = {
    x : 50,
    spdX : 30,
    y : 40,
    spdY : 5,
    name : 'P',
};
//enemy 
var enemy = {
    x : 150,
    spdX : 10,
    y : 350,
    spdY : 15,
    name : 'E',
};

setInterval(update,40);
 
function update(){
    player.x += player.spdX;
    player.y += player.spdY;
    ctx.fillText(player.name,player.x,player.y);
        
        
    if(player.x < 0 || player.x > WIDTH){
        console.log(message);
        player.spdX = -player.spdX;
    }
    if(player.y < 0 || player.y > HEIGHT){
        console.log(message);
        player.spdY = -player.spdY;
    }

    //enemy
    enemy.x += enemy.spdX;
    enemy.y += enemy.spdY;
    ctx.fillText(enemy.name, enemy.x,enemy.y);
        
        
    if(enemy.x < 0 || enemy.x > WIDTH){
        console.log(message);
        enemy.spdX = -enemy.spdX;
    }
    if(enemy.y < 0 || enemy.y > HEIGHT){
        console.log(message);
        enemy.spdY = -enemy.spdY;
    }
};