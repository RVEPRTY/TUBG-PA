const targetDate = new Date("2026-02-17T00:00:00Z");
const el = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    el.textContent = "Voting is now OPEN";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  el.textContent = `Voting opens in ${days}d ${hours}h ${minutes}m`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
