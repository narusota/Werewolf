const player = JSON.parse(localStorage.getItem("player"));
const count = parseInt(localStorage.getItem("count"));

const playerName = document.querySelector("#playerName");

for (let i = 1; i <= count; i++) {
    let input = document.createElement("input")
    let button = document.createElement("button")
    let br = document.createElement("br")

    button.textContent = i;
    input.id = `input${i}`;

    // クリックしたらplayerに名前が追加される
    button.addEventListener("click", () => {
        player[i].name = document.querySelector(`#input${i}`).value
         console.log(player);
    })

    playerName.appendChild(input);
    playerName.appendChild(button);
    playerName.appendChild(br);
}

// 送信ボタン
const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", () => {
    // すべてのインプットに値があるか確認
    for (let i = 1; i <= count; i++) {
        if(!player[i].name) {
            alert(`プレイヤー${i}に名前をセットしてください`);
            return
        }
    }
    // trueならvote.htmlに遷移
    location.href = "vote.html";
})


