const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

function setDate() {
  const time = new Date();

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hoursDegrees = ((hours / 12) * 360) + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);