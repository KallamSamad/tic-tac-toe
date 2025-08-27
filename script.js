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

function game() {
    while (!gameFlow.gameOver) {
        let player = gameFlow.player1Turn ? "Player 1" : "Player 2"
        let marker = gameFlow.player1Turn ? playerObject.player1Marker : playerObject.player2Marker
        let position = Number(prompt(`${player}: add number 0-8`))

        if (gameBoardObject.gameBoard[position] === "X" || gameBoardObject.gameBoard[position] === "O") {
            console.log("Invalid input")
            continue
        }

        gameBoardObject.gameBoard[position] = marker
        console.log(gameBoardObject.gameBoard)

        for (let combo of gameBoardObject.winningCombo) {
            let [a, b, c] = [gameBoardObject.gameBoard[combo[0]], gameBoardObject.gameBoard[combo[1]], gameBoardObject.gameBoard[combo[2]]]
            if (a === "X" && b === "X" && c === "X") {
                gameFlow.gameOver = true
                gameFlow.winner = "Player 1 wins"
                break
            } else if (a === "O" && b === "O" && c === "O") {
                gameFlow.gameOver = true
                gameFlow.winner = "Player 2 wins"
                break
            }
        }

        if (!gameFlow.gameOver && !gameBoardObject.gameBoard.includes("")) {
            gameFlow.gameOver = true
            gameFlow.winner = "Draw"
        }

        gameFlow.player1Turn = !gameFlow.player1Turn
    }

    console.log(gameFlow.winner)
}

game()


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