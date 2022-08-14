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
        const oMove = CPUmove();
        board[oMove].textContent = 'o';
        checkWin('o',board);
    }
    else {prompt('Please click a blank spot');}
})
})

return{
    board
}
})();



//function to check the blank spots on the board
const checkBlank = (board)=> {
    blanks = [];
    board.array.forEach(element => {
        if (element.textContent === ""){
            blanks.push(element);
        } 
    });
    return {board}
};

const players = (sign) =>{
    this.sign = sign;
};

//function to reset the board 
const reset = ((board) =>{
    board.forEach((element)=>{
        element.textContent = "";
    })
});

const checkWin = (sign, board) => {
    //function to show winner 
    const win = ((sign) =>{
        //create win div screen thing
        screen = document.createElement('div');
        screen.textContent = `${sign} wins!`;
//create reset button

        const resetB = document.createElement('button');
        resetB.textContent = 'Reset';
        resetB.setAttribute('type', 'button');

        //append new elements to wrapper 
        body = document.body;
        body.appendChild(screen);
        body.appendChild(resetB);
        
        //add event listener on button to reset the board
        resetB.addEventListener('click', (board)=>{
            reset(board);
            resetB.removeChild();
            screen.removechild();
        });
    })();
    const blanks = checkBlank(board);

    //check board to see if there's 3 in a row
    if (div1.textContent === sign && div2.textContent === sign && div3.textContent === sign){
        win(player);
    }
    else if (div4.textContent === sign && div5.textContent === sign && div6.textContent === sign){
        win(player);
    }
    else if (div7.textContent === sign && div8.textContent === sign && div9.textContent === sign){
        win(player);
    }
    //left-most column 3 in a row 
    else if (div1.textContent === sign && div4.textContent === sign && div7.textContent === sign){
        win(player);
    }
    //middle column
    else if (div2.textContent === sign && div5.textContent === sign && div8.textContent === sign){
        win(player);
    }
    //right-most column
    else if (div3.textContent === sign && div6.textContent === sign && div9.textContent === sign){
        win(player);
    }
    // diagonal 1 
    else if (div7.textContent === sign && div5.textContent === sign && div3.textContent === sign){
        win(player);
    }
    //diagonal 2
    else if (div9.textContent === sign && div5.textContent === sign && div1.textContent === sign){
        win(player); 
    }
    else if (blanks.length === 0){
        const tie = document.createElement('div');
        tie.textContent = `It's a tie!`;
        body = document.body;
        body.appendChild(tie);

    }
};

const CPUmove = () => {
    //based on white spaces, CPU does their move
    blanks = checkBlank.board;
    move = math.floor(Math.random()*blanks.length);
return{
    move
}
}

const game = ()=>{
    const player1 = players('x');
    const player2 = players('o');

    board = gameboard.board;


}
