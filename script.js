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

    board.forEach((element)=>{
        element.addEventListener('click', ()=>{
            if (element.textContent === ""){
            element.textContent = 'x';
        checkWin('x', board);
        const blanks = checkBlank(board);
        const oMove = Math.floor(Math.random()*blanks.length);
        console.log(oMove);
        board[oMove].textContent = 'o';
        checkWin('o',board);
    }
    else {prompt('Please click a blank spot');}
})
})

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

const players = (sign, name) =>{
    return{
        sign, name
    }
};

//function to reset the board 
const reset = () =>{
    const board = gameboard.board;
    const blanks = checkBlank(board);
    if (blanks.length === 0){
        const tie = document.createElement('div');
        tie.textContent = `It's a tie!`;
        body = document.body;
        body.appendChild(tie);
    }
    return {blanks}
};

const checkWin = (player) => {
    const board = gameboard.board;
    //function to show winner 
    const win = (player) => {

        //create win div screen thing
        const screen = document.createElement('div');
        screen.textContent = `${player.name} wins!`;
    //create reset button
        const resetB = document.createElement('button');
        resetB.textContent = 'Reset';
        resetB.setAttribute('type', 'button');
        resetB.addEventListener('click', reset());
        //have to remove event listeners to divs when resset button is up 
    
        //append new elements to wrapper 
        const body = document.body;
        body.appendChild(screen);
        body.appendChild(resetB);
        
        //add event listener on button to reset the board
        resetB.addEventListener('click', (board)=>{
            reset(board);
            resetB.removeChild();
            screen.removechild();
        });
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
    else reset(board);
};

const CPUmove = (board) => {
    //based on white spaces, CPU does their move
    const blanks = checkBlank(board);
    const move = Math.floor(Math.random()*blanks.length);
return{
    move
}
}

const game = ()=>{
    const player1 = players('x');
    const player2 = players('o');

    board = gameboard.board;



}
