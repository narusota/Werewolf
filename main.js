let player = {};
const playerSetBtn = document.querySelector("#playerSetBtn");
const playerSet = document.querySelector("#playerSet");
const errorMsg = document.querySelector("#errorMsg");

playerSetBtn.addEventListener("click", function () {
    const count = parseInt(playerSet.value);

    if (count < 4 || 16 < count) {
        errorMsg.textContent = "4~16人で設定してください"
        return;
    }

    errorMsg.textContent = "";

    const ramdom = Math.floor(Math.random() * count) + 1;

    for (let i = 1; i <= count; i++) {
        player[i] = true;
    }

    player[ramdom] = false;
    console.log(`${ramdom}にfalseが入りました`);
           
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



