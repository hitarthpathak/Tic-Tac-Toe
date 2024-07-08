let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let winner_box = document.querySelector(".winner");
let winner_result = document.querySelector("#winner");

// --------------------------------------------------------------------------------------------------

let turn_x = true;

// --------------------------------------------------------------------------------------------------

const winning_patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// --------------------------------------------------------------------------------------------------

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn_x) {
            box.innerText = "X";
            turn_x = false;
        }
        else {
            box.innerText = "O";
            turn_x = true;
        }
        box.disabled = true;
        check_winner();
    })
})

// --------------------------------------------------------------------------------------------------

const disable_boxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

// --------------------------------------------------------------------------------------------------

const enable_boxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

// --------------------------------------------------------------------------------------------------

const check_winner = () => {
    for (let pattern of winning_patterns) {
        let position_1 = boxes[pattern[0]].innerText;
        let position_2 = boxes[pattern[1]].innerText;
        let position_3 = boxes[pattern[2]].innerText;

        if (position_1 != "" && position_2 != "" && position_3 != "") {
            if (position_1 === position_2 && position_2 === position_3) {
                show_winner(position_1);
            }
        }
    }
}

// --------------------------------------------------------------------------------------------------

const show_winner = (winner) => {
    winner_result.innerText = `${winner} Wins!`;
    winner_box.classList.remove("hidden");
    disable_boxes();
}

// --------------------------------------------------------------------------------------------------

const reset_game = () => {
    turn_x = true;
    enable_boxes();
    winner_box.classList.add("hidden");
}

// --------------------------------------------------------------------------------------------------

reset.addEventListener("click", () => {
    reset_game();
})