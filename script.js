let gameBoardObject = {
    gameBoard: ["", "", "", "", "", "", "", "", ""],
    winningCombo: [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
}

let playerObject = {
    player1Marker: "X",
    player2Marker: "O"
}

let gameFlow = {
    player1Turn: true,
    gameOver: false,
    winner: ""
}


const container = document.createElement("div")
container.classList.add("container")
document.body.appendChild(container)


for (let i = 0; i < 9; i++) {
    const board = document.createElement("div")
    board.classList.add("board")
    board.style.width = "50px"
    board.style.height = "50px"
    board.style.display = "inline-block"
    board.style.border = "1px solid blue"
    board.style.textAlign = "center"
    board.style.lineHeight = "50px"
    container.appendChild(board)
}


const squares = document.querySelectorAll(".board")
const winner=document.createElement("div")
container.appendChild(winner)

squares.forEach((cell, i) => {
    cell.addEventListener("click", () => {
        if (gameFlow.gameOver) return 
        if (gameBoardObject.gameBoard[i] !== "") return // 

        let marker = gameFlow.player1Turn ? playerObject.player1Marker : playerObject.player2Marker
        gameBoardObject.gameBoard[i] = marker
        cell.textContent = marker


        for (let combo of gameBoardObject.winningCombo) {
            let [a, b, c] = [gameBoardObject.gameBoard[combo[0]], gameBoardObject.gameBoard[combo[1]], gameBoardObject.gameBoard[combo[2]]]
            if (a === "X" && b === "X" && c === "X") {
                gameFlow.gameOver = true
                gameFlow.winner = "Player 1 wins"
                winner.innerHTML=gameFlow.winner            

            } else if (a === "O" && b === "O" && c === "O") {
                gameFlow.gameOver = true
                gameFlow.winner = "Player 2 wins"
                winner.innerHTML=gameFlow.winner            
          }
        }

        if (!gameFlow.gameOver && !gameBoardObject.gameBoard.includes("")) {
            gameFlow.gameOver = true
            gameFlow.winner = "Draw"
            winner.innerHTML=gameFlow.winner            

        }

        gameFlow.player1Turn = !gameFlow.player1Turn

<<<<<<< HEAD
        if (gameFlow.gameOver) console.log(gameFlow.winner)
    })
})
=======
    console.log(gameFlow.winner)
}

game()
<<<<<<< HEAD
=======


const container=document.createElement("div")
container.style.backgroundColor="red"
container.classList.add("container")
document.body.appendChild(container)

for (let i=0;i<9;i++){
    const board = document.createElement("div")
    board.style.backgroundColor="blue"
    board.classList.add("board")
    board.textContent=gameBoardObject.gameBoard[i]
    container.appendChild(board)
    
}
>>>>>>> 5459920 (added DOM manipualtion)
>>>>>>> main
