const players = (sign, name) =>{
     //function to show winner 
     const win = () => {
        //create win div screen thing
        const body = document.body;
        const screen = document.createElement('div');
        screen.setAttribute('id','win');
        screen.textContent = `${name} wins!`;
        body.appendChild(screen);
    };
    return{
        sign, name, win
    }
};


const checkBlank = (board)=> {
    blanks = [];
    board.forEach((element) => {
        if (element.textContent === ""){
            blanks.push(element);
        } 
    });
    return blanks;
};

const checkWin = (player,board) => {

    //check board to see if there's 3 in a row
    if (board[0].textContent === player.sign && board[1].textContent === player.sign && board[2].textContent === player.sign){
        return player.name;
    }
    else if (board[3].textContent === player.sign && board[4].textContent === player.sign && board[5].textContent === player.sign){
        return player.name;
    }
    else if (board[6].textContent === player.sign && board[7].textContent === player.sign && board[8].textContent === player.sign){
        return player.name;
    }
    //left-most column 3 in a row 
    else if (board[0].textContent === player.sign && board[3].textContent === player.sign && board[6].textContent === player.sign){
        return player.name;
    }
    //middle column
    else if (board[1].textContent === player.sign && board[4].textContent === player.sign && board[7].textContent === player.sign){
        return player.name;
    }
    //right-most column
    else if (board[2].textContent === player.sign && board[5].textContent === player.sign && board[8].textContent === player.sign){
        return player.name;
    }
    // diagonal 1 
    else if (board[6].textContent === player.sign && board[4].textContent === player.sign && board[2].textContent === player.sign){
        return player.name;
    }
    //diagonal 2
    else if (board[8].textContent === player.sign && board[4].textContent === player.sign && board[0].textContent === player.sign){
        return player.name; 
    }
    else if (board.forEach((element)=>{
        element.textContent != "";
        const blanks = checkBlank(board);
        if (blanks.length === 0){
        const tie = document.createElement('div');
        tie.textContent = `It's a tie!`;
        body = document.body;
        body.appendChild(tie);
        return null;
    }
    })
    );
    else return null;
};

const gameboard = (() => {
    const board = [];
    const div1 = document.getElementById('1');
    board.push(div1);
    const div2 = document.getElementById('2');
    board.push(div2);
    const div3 = document.getElementById('3');
    board.push(div3);
    const div4 = document.getElementById('4');
    board.push(div4);
    const div5 = document.getElementById('5');
    board.push(div5);
    const div6 = document.getElementById('6');
    board.push(div6);
    const div7 = document.getElementById('7');
    board.push(div7);
    const div8 = document.getElementById('8');
    board.push(div8);
    const div9 = document.getElementById('9');
    board.push(div9);

let winner = null;
const player1 = players('x', 'Player1');
const player2 = players('o', 'Player2');

const clickEvent = (element)=>{
    let blanks = checkBlank(board);
if (blanks.includes(element) === true){
    element.textContent = 'x';
    blanks = checkBlank(board);
winner = checkWin(player1,board);
        if (winner === player1.name){
            return player1.win();}
else {winner = CPUTurn(blanks, player2)};
if (winner === player2.name){return player2.win()};
}
else return;

board.forEach((element)=>{
    element.addEventListener('click', ()=>{
        clickEvent(element);
    });
});
}

board.forEach((element)=>{
    element.addEventListener('click', ()=>{
        clickEvent(element);
    })
});

    return{board};
})();

const reset = (()=>{
    let board = gameboard.board;
    const resetB = document.getElementById('reset');
    resetB.textContent = 'Reset';
    resetB.addEventListener('click', ()=>{
        board.forEach((element)=>{
            element.textContent = "";
        });
        const body = document.body;
        const screen = document.getElementById('win');
        body.removeChild(screen);
    })
})();

const CPUTurn = (blanks, player2)=>{ 
const oMove = CPUmove(blanks);
blanks[oMove].textContent = 'o';
const board = gameboard.board;
let winner = checkWin(player2,board);
if (winner === player2.name){
    return winner}
else return null;
};

//get number based on blanks to place 'o' for CPU move 
const CPUmove = (blanks) => {
    //based on white spaces, CPU does their move
    const len  = blanks.length - 1;
    let move = Math.floor(Math.random()*len); 
return move;
};