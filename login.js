const user = {
    username: "username",
    password: "password"
};

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const submitBtn = document.querySelector("#submitBtn");
const errorMsg = document.querySelector("#errorMsg");

// 保存されているユーザーデータと一致したらsetting.htmlに遷移
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (username.value == user.username && password.value == user.password) {
        location.href = "setting.html";
    } else {
        errorMsg.textContent = "ユーザーネームまたはパスワードが間違っています";
    }
})


