const SIZE = 40;
const xStart = innerWidth/2 - 400;
const yStart = 30;
const EMPTY = "&nbsp;";

let Game = function () {

}

let Player = function(){
    this.turn = 0;
    this.box = new Array([]);

}
Player.prototype.getXY = function(x,y){
    this.x = x;
    this.y = y;
    this.box.push([this.x,this.y]);
    console.log(this.box);
}
Player.prototype.tracking = function(a,b){

    return a.innerText = b;
}

Player.prototype.checkTracking = function(a,b){
        if (a.innerHTML == EMPTY){
            console.log(a.innerHTML);
        }else {
            console.log(a.innerHTML);
        }
}

Game.prototype.initGameBoard = function () {

}

Game.prototype.createGameBoard = function() {
    for (i = 0 ;i<20 ; i++){

        for (j =0;j<20 ;j++){
            let cell = document.createElement('cell');
            cell.className = "cell";
            cell.style.top = i*SIZE+yStart+"px";
            cell.style.left = j*SIZE+xStart+"px";
            cell.addEventListener('click',set);
            document.getElementById('main').appendChild(cell);

        }

    }
}


let turn = 0;
let player1 = new Player();
let player2= new Player();

function tick(x,y,a) {
    if (turn % 2){
        player1.getXY(x,y);
        player1.checkTracking(a,"X");
        turn++;
        //console.log(turn)
    }else {
        player2.getXY(x,y);
        player2.checkTracking(a,"O");
        turn++;
        //console.log(turn)
    }
}
function set() {
    console.log("Click");
}
function start() {
     let game = new Game();
     game.createGameBoard();
}

function getXY(x,y) {
    box.push([x,y]);
    console.log(box);
}