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

document.getElementById("button").addEventListener("mouseover",function(){
  this.classList.add("btn-green");
  this.classList.remove("btn-white");
  this.firstChild.classList.add("green");
})
document.getElementById("button").addEventListener("mouseout",function(){
  this.classList.add("btn-white");
  this.classList.remove("btn-green");
  this.firstChild.classList.remove("green");
})
