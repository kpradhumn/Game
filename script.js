let boxes = document.querySelectorAll(".box")
let reset_btn = document.querySelector(".reset-btn")
let new_btn = document.querySelector(".new-btn")
let Winning_MSG = document.querySelector(".Winning_MSG")
console.log(Winning_MSG.innerText);
console.log(boxes);
let termO = true;
const winning_pattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    ];

boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
        if(termO){
            box.innerText = "O"
            termO = false;
            box.style.color = "#803D3B"            
        }
        else{
            box.innerText = "X"            
            termO = true;
            box.style.color = "#1A4D2E"
        }
        
        box.disabled = true
        checkWinner();
    })
});

const enableBoxes = () =>{
    for( let box of boxes){
        box.disabled = false;
    }
}
const disableBoxes = () =>{
    for( let box of boxes){
        box.disabled = true;
    }
}

const resetGame = () =>{
    for( let box of boxes){
        box.innerText = "";
        box.disabled = false;
    }
    Winning_MSG.classList.add("hide");
}
const showWinner = (winner) =>{
    Winning_MSG.innerText = `Congratulations! Winner is ${winner} `;
    Winning_MSG.classList.remove("hide");
    disableBoxes();
}

const checkWinner = ()=>{
     for(let pattern of winning_pattern){        

        let pos0Value = boxes[pattern[0]].innerText
        let pos1Value = boxes[pattern[1]].innerText
        let pos2Value = boxes[pattern[2]].innerText
        if(pos0Value != "" && pos1Value != "" && pos2Value != ""){
            if(pos0Value == pos1Value && pos2Value == pos1Value){
                showWinner(pos0Value);
            }
        }        
     }
}
reset_btn.addEventListener("click", resetGame);
new_btn.addEventListener("click", resetGame);