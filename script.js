var speed = 3000;

function scrollen() {
console.log(window.scrollY)
console.log(window.scrollMaxY)
  if(window.scrollY < window.scrollMaxY)

  scrollBy(0,200);
  else

    scrollTo(0, 0);
}

setInterval(scrollen, speed);
