const player = {};
const playerSetBtn = document.querySelector("#playerSetBtn");
const playerSet = document.querySelector("#playerSet");
const errorMsg = document.querySelector("#errorMsg");

playerSetBtn.addEventListener("click", function () {
    let count = parseInt(playerSet.value);

    if (count < 4 || 16 < count) {
        errorMsg.textContent = "4~16人で設定してください"
        return;
    }

    errorMsg.textContent = "";

    for (let i = 1; i <= count; i++) {
        // player[i] = true;
        player[i] = {name: "", isWerewolf: true};
    }

    //4~6の場合は１人、7~10の場合は２人、11~14の場合は３人、15~16の場合は４人
    if (4 <= count && count <= 6) {
        let random = Math.floor(Math.random() * count) + 1;
        while (player[random] === false) {
            player[random].isWerewolf = Math.floor(Math.random() * count) + 1
        }
       player[random].isWerewolf = false; 
    } else if (7 <= count && count <= 10) {
        for (let i = 0; i < 2; i++) {
            let random = Math.floor(Math.random() * count) + 1;
            while (player[random] === false) {
                random = Math.floor(Math.random() * count) + 1
            }
           player[random].isWerewolf = false; 
        }
    } else if (11 <= count && count <= 14) {
        for (let i = 0; i < 3; i++) {
            let random = Math.floor(Math.random() * count) + 1;
            while (player[random] === false) {
                random = Math.floor(Math.random() * count) + 1
            }
           player[random].isWerewolf = false; 
        }
    } else if (15 <= count && count <= 16) {
        for (let i = 0; i < 4; i++) {
            let random = Math.floor(Math.random() * count) + 1;
            while (player[random] === false) {
                random = Math.floor(Math.random() * count) + 1
            }
           player[random].isWerewolf = false; 
        }
    }
    //playerを表示
    console.log(player);

    //localStorageを追加
    localStorage.setItem("player", JSON.stringify(player));
    localStorage.setItem("count", count);
    location.href = "name.html";
})