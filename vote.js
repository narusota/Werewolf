const buttonContainer = document.querySelector("#buttonContainer");

const player = JSON.parse(localStorage.getItem("player"));
const count = parseInt(localStorage.getItem("count"));

//投票ボタンを作成
for (let i = 1; i <= count; i++) {
    let btn = document.createElement("button");
    let input = document.createElement("input");
    let br = document.createElement("br");
    btn.textContent = i;
    input.type = "number";
    //最小値を設定
    input.min = 0;
    input.id = `btn${i}`;
    buttonContainer.appendChild(btn);
    buttonContainer.appendChild(input);
    buttonContainer.appendChild(br);
}

const voteBtn = document.createElement("button");
voteBtn.textContent = "投票";
voteBtn.id = "voteBtn";
buttonContainer.appendChild(voteBtn);

//投票数を制限
voteBtn.addEventListener("click", () => {
    let total = 0;
    for (let i = 1; i <= count; i++) {
        let inputVal = parseInt(document.querySelector(`#btn${i}`).value) || 0;
        total += inputVal;
    }
    if (total >= count) {
        alert("投票数が人数を超えています");
    }
})