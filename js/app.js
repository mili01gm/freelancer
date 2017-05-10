//For NAV resize on scroll
window.addEventListener("scroll",function(){
  var nav = document.getElementById("nav");
  var child = document.getElementById("nav-title");
  var scrollMenu = window.pageYOffset || document.body.scrollTop;
  if(scrollMenu>50){
    nav.classList.add("after-scroll");
    child.classList.add("h2-scroll");

  } else {
    nav.classList.remove("after-scroll");
    child.classList.remove("h2-scroll");
  }
});
