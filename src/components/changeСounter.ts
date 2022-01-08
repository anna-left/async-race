function changeСounter() {
  const counterTitle = document.querySelector('.counter');
  const garageTrack = document.querySelectorAll('.garage .track');
  if (counterTitle && garageTrack) {
    counterTitle.innerHTML = String(garageTrack.length);
  }
}

export { changeСounter };
