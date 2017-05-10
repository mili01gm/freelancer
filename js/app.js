window.addEventListener("scroll",function(){
  var nav = document.getElementById("nav");
  var child = document.getElementById("nav-title");
  var scrollMenu = window.pageYOffset || document.body.scrollTop;
  if(scrollMenu>20){
    nav.classList.add("after-scroll");
    child.classList.add("h2-scroll");
    // console.log(child);
  } else {
    nav.classList.remove("after-scroll");
    child.classList.remove("h2-scroll");
  }
});
