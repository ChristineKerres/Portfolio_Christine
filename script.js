var speed = 5000;
function scrollen() {
  if(scrollY!= document.body.scrollHeight)
      scrollBy(0,400);
  else
    scrollTo(0, 0);
}
setInterval(scrollen, speed);
