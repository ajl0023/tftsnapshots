const button = document.querySelector("button");
const seconds = document.getElementById("current-seconds");
const minutes = document.getElementById("current-minutes");
let currentTime = 25;
button.onclick = () => {
  setInterval(() => {
    let time = ((currentTime - 1) * 60) / 60;
  }, 1000);
};
