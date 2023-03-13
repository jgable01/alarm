/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

  Object-oriented JavaScript
  Joshua Gable

  Basic Clock

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
'use strict'

let alarmTime = {};
alarmTime.hour;
alarmTime.minute;
const setAlarm = document.querySelector('.setalarm');
const userTime = document.querySelector('.timein');
const notifyAlarm = document.querySelector('.notify');
setInterval(updates, 1000);

function updates() {
  updateSeconds();
  checkAlarm();
}

setAlarm.addEventListener('click', () => {
  activateAlarm();
});

function activateAlarm() {
  try {
    if (userTime.value.substr(0, 2) <= 24 && userTime.value.substr(3, 2) <= 60) {
      alarmTime.hour = userTime.value.substr(0, 2);
      alarmTime.minute = userTime.value.substr(3, 2);
      notifyAlarm.style.display = 'flex';
      console.log(`Alarm set for: ${alarmTime.hour}:${alarmTime.minute}`);
    }
  } catch (err) {
    throw ("Invalid Input");
  }
}

function checkAlarm() {
  let date = new Date();
  if (date.getHours().toString().padStart(2, '0') === alarmTime.hour
    && date.getMinutes().toString().padStart(2, '0') === alarmTime.minute) {
    console.log('ring ring ring');
    resetAlarm();
  }
}

function updateSeconds() {
  const timer = document.querySelector('.test');
  const date = new Date();
  const hour = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  let currentTime = hour + ":" + minutes + ':' + seconds;
  timer.innerText = currentTime;
}

function resetAlarm() {
  alarmTime.hour = '';
  alarmTime.minute = '';
  notifyAlarm.style.display = 'none';
}
updateSeconds();



