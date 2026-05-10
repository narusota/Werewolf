let player = {};
const playerSetBtn = document.querySelector("#playerSetBtn");
const playerSet = document.querySelector("#playerSet");

playerSetBtn.addEventListener("click", function () {
    const count = parseInt(playerSet.value);

    for (let i = 1; i <= count; i++) {
        player[i] = true;
    }
    playerSet.value = "";
})

const keySearch = document.querySelector("#keySearch");
const keySearchBtn = document.querySelector("#keySearchBtn");

keySearchBtn.addEventListener("click", function () {
    if (keySearch.value in player) {
        console.log(player[keySearch.value]);
    } else {
        console.log("キーがありません");
    }
})



