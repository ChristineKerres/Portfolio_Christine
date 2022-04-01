var speed = 5000;
function scrollen() {
  if(scrollY != scrollMaxY)
      scrollByPages(1);
  else
    scrollTo(0, 0);
}
setInterval(scrollen, speed);