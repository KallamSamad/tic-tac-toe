let gameBoardObject = {
    gameBoard:
    ["", "", "",
    "",  "", "",
    "",  "", ""

    ]}
let playerObject=
{
    player1Score:0,
    player2Score: 0,
    player1Marker: "X",
    player2Marker: "O"

}

let gameFlow={
    turn: "player1",
    gameOver: "False",
    winner: "winner"


}

let position=0
function game(position){
    position=prompt("Choose a place 1-9")
    gameBoardObject.gameBoard[position]=playerObject.player1Marker
    console.log(gameBoardObject.gameBoard)


}

game(position)



