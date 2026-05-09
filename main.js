let player = {};
const playerSetBtn = document.querySelector("#playerSetBtn");
let playerSet = document.querySelector("#playerSet");

playerSetBtn.addEventListener("click", function () {
    const count = parseInt(playerSet.value);

    for (let i = 1; i <= count; i++) {
        player[i] = "";
    }
    playerSet.value = "";
})

const nameInput = document.querySelector("#nameInput");
const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", function () {
    if (nameInput.value in player) {
        console.log(player[nameInput.value]);
    } else {
        console.log("キーがありません");
    }
})



