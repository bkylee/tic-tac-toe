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
    blanks = checkBlank.board;
};


const game = ()=>{
    board = gameboard.board;
    const win = ()=>{
        //win screen whatever 
    }

    const checkWin = (sign) => {
        //check board to see if there's 3 in a row
        if (div1.textContent === sign && div2.textContent === sign && div3.textContent === sign){
            win();
        }
        else if (div4.textContent === sign && div5.textContent === sign && div6.textContent === sign){
            win();
        }
        else if (div7.textContent === sign && div8.textContent === sign && div9.textContent === sign){
            win();
        }
        //left-most column 3 in a row 
        else if (div1.textContent === sign && div4.textContent === sign && div7.textContent === sign){
            win();
        }
        //middle column
        else if (div2.textContent === sign && div5.textContent === sign && div8.textContent === sign){
            win();
        }
        //right-most column
        else if (div3.textContent === sign && div6.textContent === sign && div9.textContent === sign){
            win();
        }
        // diagonal 1 
        else if (div7.textContent === sign && div5.textContent === sign && div3.textContent === sign){
            win();
        }
        //diagonal 2
        else if (div9.textContent === sign && div5.textContent === sign && div1.textContent === sign){
            win(); 
        }
    };

    const CPUmove = () => {
        //based on white spaces, CPU does their move
        blanks = checkBlank.board;
        move = math.floor(Math.random()*blanks.length)
    }

    return{
        checkWin, CPUmove
    }

};