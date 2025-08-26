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
    player1Turn: true,
    player2Turn: false,
    gameOver: false,
    winner: "winner"


}

let position=0



function game(position){

    while (gameFlow.player1Turn===true){
         position=Number(prompt("add number"))    
         if (gameBoardObject.gameBoard[position]=="X"|| gameBoardObject.gameBoard[position]=="O"){
                    console.log("Invalid input")
              }
         else{
              gameBoardObject.gameBoard[position]=playerObject.player1Marker
              console.log(gameBoardObject.gameBoard)
              gameFlow.player2Turn = true
              gameFlow.player1Turn =false
    }
    
  
}}

game(position)



