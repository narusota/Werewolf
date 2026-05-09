let player = {
    1: true,
    2: true,
    3: true,
    4: false
};

const nameInput = document.querySelector("#nameInput");
const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", function() {
    if (nameInput.value in player) {
        console.log("キーがあります");
    } else {
        console.log("キーがありません");
    }
})



