const NeverBtn = document.getElementById("never");
const YesBtn = document.querySelector(".yes");
const text = document.querySelector(".neon");
const BtnWarp = document.querySelector(".button-wrap");
NeverBtn.addEventListener("mouseover", () => {
    let x = Math.floor(Math.random() * 70);
    let y = Math.floor(Math.random() * 70);
    NeverBtn.style.top = `${x > 100 ? 96 : x}%`;
    NeverBtn.style.left = `${y > 100 ? 96 : y}%`;
});
YesBtn.onclick = function () {
    BtnWarp.style.display="none";
    text.dataset.text="Chúc mừng nhận người yêu thành công";
    text.innerHTML = "Chúc mừng nhận người yêu thành công";
};

