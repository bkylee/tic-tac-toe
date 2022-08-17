const players = (sign, name) =>{
    return{
        sign, name
    }
};

const CPUmove = (board) => {
    //based on white spaces, CPU does their move
    const blanks = checkBlank(board);
    const move = Math.floor(Math.random()*blanks.length);
return{
    move
}
};

function divEvent (board,player1,player2){
    board.forEach((element)=>{ 
    if (element.textContent === ""){
    element.textContent = 'x';
checkWin(player1, board);
const oMove = CPUmove(board);
board[oMove].textContent = 'o';
checkWin(player2,board);}
else prompt('Please click a blank spot');
});

const gameboard = (() => {
    const player1 = players('x', 'player1');
    const player2 = players('o','player2')
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

    const resetB = document.getElementById('reset');
    resetB.textContent = 'Reset';
    resetB.addEventListener('click', ()=>{
        board.forEach((element)=>{
            element.textContent = "";
        });
        const body = document.body;
        const screen = document.getElementById('win');
        body.removeChild(screen);
    });

    board.forEach((element)=>{
        element.addEventListener('click', x(board, player1, player2), true)});

return {board};
})();

//function to check the blank spots on the board
const checkBlank = (board)=> {
    blanks = [];
    board.forEach((element) => {
        if (element.textContent === ""){
            blanks.push(element);
        } 
    });
    return blanks;
};


const checkWin = (player) => {
    const board = gameboard.board;
    //function to show winner 
    const win = (player) => {

        //create win div screen thing
        const body = document.body;
        const screen = document.createElement('div');
        screen.setAttribute('id','win');
        screen.textContent = `${player.name} wins!`;
        body.appendChild(screen);
        board.forEach((element) =>{
            element.removeEventListener('click', x(board), true);
        })
    };

    //check board to see if there's 3 in a row
    if (board[0].textContent === player.sign && board[1].textContent === player.sign && board[2].textContent === player.sign){
        win(player);
    }
    else if (board[3].textContent === player.sign && board[4].textContent === player.sign && board[5].textContent === player.sign){
        win(player);
    }
    else if (board[6].textContent === player.sign && board[7].textContent === player.sign && board[8].textContent === player.sign){
        win(player);
    }
    //left-most column 3 in a row 
    else if (board[0].textContent === player.sign && board[3].textContent === player.sign && board[6].textContent === player.sign){
        win(player);
    }
    //middle column
    else if (board[1].textContent === player.sign && board[4].textContent === player.sign && board[7].textContent === player.sign){
        win(player);
    }
    //right-most column
    else if (board[2].textContent === player.sign && board[5].textContent === player.sign && board[8].textContent === player.sign){
        win(player);
    }
    // diagonal 1 
    else if (board[6].textContent === player.sign && board[4].textContent === player.sign && board[2].textContent === player.sign){
        win(player);
    }
    //diagonal 2
    else if (board[8].textContent === player.sign && board[4].textContent === player.sign && board[0].textContent === player.sign){
        win(player); 
    }
    else if (board.forEach((element)=>{
        element.textContent != "";
        const blanks = checkBlank(board);
        if (blanks.length === 0){
        const tie = document.createElement('div');
        tie.textContent = `It's a tie!`;
        body = document.body;
        body.appendChild(tie);
    }
    })
    );
};
