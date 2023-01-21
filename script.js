//Source: https://www.mediaevent.de/javascript/date-datum-zeit.html
//January is 0 !!!!!
///           year, month, day, hour, minutes, seconds, milliseconds
const startDateTime = new Date(2023, 0, 21, 14, 45, 10, 0); // Last published version
const startStamp = startDateTime.getTime();

let newDate = new Date();
let newStamp = newDate.getTime();

let timer;

function updateClock() {
  newDate = new Date();
  newStamp = newDate.getTime();
  let diff = Math.round((newStamp - startStamp) / 1000);

  let d = Math.floor(diff / (24 * 60 * 60));
  diff = diff - d * 24 * 60 * 60;
  let h = Math.floor(diff / (60 * 60));
  diff = diff - h * 60 * 60;
  let m = Math.floor(diff / 60);
  diff = diff - m * 60;
  let s = diff;

  document.getElementById("time-counting").innerHTML =
    "You could have seen the last update  " +
    "<br>" +
    d +
    " days, " +
    "<br>" +
    h +
    " hours, " +
    "<br>" +
    m +
    " minutes, " +
    "<br>" +
    s +
    " seconds ago.";
}

timer = setInterval(updateClock, 1000);

//Source: https://stackoverflow.com/questions/25934817/how-to-let-a-div-stick-to-cursor

document.addEventListener(
  "mousemove",
  function (ev) {
    document.getElementById("revision").style.transform =
      "translateY(" + (ev.clientY - 180) + "px)";
    document.getElementById("revision").style.transform +=
      "translateX(" + (ev.clientX - 200) + "px)";
  },
  false
);
