let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () =>{
    turn0 = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box is clicked");
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkwinner = () => {
    for (pattern of winPatterns) {
        console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

        let pos1value = boxes[pattern[0]].innerText;
        let pos2value = boxes[pattern[1]].innerText;
        let pos3value = boxes[pattern[2]].innerText;

        if (pos1value != "" && pos2value != "" && pos3value != "") {
            if (pos1value === pos2value && pos2value === pos3value) {
                console.log("winner", pos1value);

                showwinner(pos1value);
            }
        }
    }
}

newgamebtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);



