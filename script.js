const gameboard = (() => {
    const board = [];
    const div1 = document.createElement('div');
    board.push(div1);
    const div2 = document.createElement('div');
    board.push(div2);
    const div3 = document.createElement('div');
    board.push(div3);
    const div4 = document.createElement('div');
    board.push(div4);
    const div5 = document.createElement('div');
    board.push(div5);
    const div6 = document.createElement('div');
    board.push(div6);
    const div7 = document.createElement('div');
    board.push(div7);
    const div8 = document.createElement('div');
    board.push(div8);
    const div9 = document.createElement('div');
    board.push(div9);
return {
    board
}
})();

const players = (sign) =>{
    this.sign = sign;
};


const game = ()=>{
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
    }

    return{
        checkWin, checkBlank, CPUmove
    }

};