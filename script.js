const clockTitle = document.querySelector("#clock");

function getClock() {
  const today = new Date();
  const christmas = new Date(`December 25 ${today.getFullYear()}`);
  const timeLeft = Math.floor((christmas - today) / 1000);
  const days = Math.floor(timeLeft / 60 / 60 / 24);
  const hours = String(Math.floor(timeLeft / 60 / 60) % 24).padStart(2, "0");
  const minutes = String(Math.floor(timeLeft / 60) % 60).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");
  clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

getClock();

setInterval(getClock, 1000);