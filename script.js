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
return {
    board
}
})();

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

const win = ((player) =>{
    screen = document.createElement('div');
    screen.textContent = `${player.sign} wins!` 
})();

const game = ()=>{
    const player1 = players('x');
    const player2 = players('o');

    board = gameboard.board;
    board.forEach(addEventListener('click', ()=>{
        
    }))
}
    const checkWin = (player) => {
        //check board to see if there's 3 in a row
        if (div1.textContent === player.sign && div2.textContent === player.sign && div3.textContent === player.sign){
            win(player);
        }
        else if (div4.textContent === player.sign && div5.textContent === player.sign && div6.textContent === player.sign){
            win(player);
        }
        else if (div7.textContent === player.sign && div8.textContent === player.sign && div9.textContent === player.sign){
            win(player);
        }
        //left-most column 3 in a row 
        else if (div1.textContent === player.sign && div4.textContent === player.sign && div7.textContent === player.sign){
            win(player);
        }
        //middle column
        else if (div2.textContent === player.sign && div5.textContent === player.sign && div8.textContent === player.sign){
            win(player);
        }
        //right-most column
        else if (div3.textContent === player.sign && div6.textContent === player.sign && div9.textContent === player.sign){
            win(player);
        }
        // diagonal 1 
        else if (div7.textContent === player.sign && div5.textContent === player.sign && div3.textContent === player.sign){
            win(player);
        }
        //diagonal 2
        else if (div9.textContent === player.sign && div5.textContent === player.sign && div1.textContent === player.sign){
            win(player); 
        }
    };

    const CPUmove = () => {
        //based on white spaces, CPU does their move
        blanks = checkBlank.board;
        move = math.floor(Math.random()*blanks.length);

    }

