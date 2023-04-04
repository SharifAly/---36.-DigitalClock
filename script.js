function getTime() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  if (hour.toString().length == 1) {
    hour = "0" + hour;
  }
  if (minute.toString().length == 1) {
    minute = "0" + minute;
  }
  if (second.toString().length == 1) {
    second = "0" + second;
  }
  const time = hour + ":" + minute + ":" + second;
  return time;
}

function getDate() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate();

  if (month.toString().length == 1) {
    month = "0" + month;
  }
  if (day.toString().length == 1) {
    day = "0" + day;
  }

  const dateTime = year + "/" + month + "/" + day;
  return dateTime;
}

// example usage: realtime clock
setInterval(function () {
  currentTime = getTime();
  document.querySelector(".time").innerHTML = currentTime;
}, 1000);

// console.log(getDateTime);

const currentDate = document.querySelector(".date");

currentDate.innerHTML = getDate();
