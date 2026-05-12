const player = {};
const playerSetBtn = document.querySelector("#playerSetBtn");
const playerSet = document.querySelector("#playerSet");
const errorMsg = document.querySelector("#errorMsg");

const buttonContainer = document.querySelector("#buttonContainer");

playerSetBtn.addEventListener("click", function () {
    const count = parseInt(playerSet.value);

    if (count < 4 || 16 < count) {
        errorMsg.textContent = "4~16人で設定してください"
        return;
    }

    errorMsg.textContent = "";

    for (let i = 1; i <= count; i++) {
        player[i] = true;
    }

    //4~6の場合は１人、7~10の場合は２人、11~14の場合は３人、15~16の場合は４人
    if (4 <= count && count <= 6) {
        let random = Math.floor(Math.random() * count) + 1;
        while (player[random] === false) {
            random = Math.floor(Math.random() * count) + 1
        }
        player[random] = false;
    } else if (7 <= count && count <= 10) {
        for (let i = 0; i < 2; i++) {
            let random = Math.floor(Math.random() * count) + 1;
            while (player[random] === false) {
                random = Math.floor(Math.random() * count) + 1
            }
            player[random] = false;
        }
    } else if (11 <= count && count <= 14) {
        for (let i = 0; i < 3; i++) {
            let random = Math.floor(Math.random() * count) + 1;
            while (player[random] === false) {
                random = Math.floor(Math.random() * count) + 1
            }
            player[random] = false;
        }
    } else if (15 <= count && count <= 16) {
        for (let i = 0; i < 4; i++) {
            let random = Math.floor(Math.random() * count) + 1;
            while (player[random] === false) {
                random = Math.floor(Math.random() * count) + 1
            }
            player[random] = false;
        }
    }
    //playerを表示
    console.log(player);

    playerSet.value = "";
    buttonContainer.innerHTML = "";

    //投票ボタンを作成
    for (let i = 1; i <= count; i++) {
        let btn = document.createElement("button");
        let input = document.createElement("input");
        let br = document.createElement("br");
        btn.textContent = i;
        input.type = "number";
        buttonContainer.appendChild(btn);
        buttonContainer.appendChild(input);
        buttonContainer.appendChild(br);
    }

    const voteBtn = document.createElement("button");
    voteBtn.textContent = "投票";
    buttonContainer.appendChild(voteBtn);

})