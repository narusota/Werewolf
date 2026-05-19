console.log(localStorage.getItem("player"));

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
    })
    playerName.appendChild(input);
    playerName.appendChild(button);
    playerName.appendChild(br);
}


