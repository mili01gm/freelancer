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
  console.log(scrollMenu);
  var portfolio = document.getElementById("nav-portfolio");
  var hijoP = document.getElementById("port-a");
  var about = document.getElementById("nav-about");
  var hijoA = document.getElementById("about-a");
  if(scrollMenu>720){
    portfolio.classList.add("li-scroll");
    hijoP.classList.add("a-scroll");
    hijoP.classList.remove("bg-gray");
  }
  if(scrollMenu>2730){
    portfolio.classList.remove("li-scroll");
    about.classList.add ("li-scroll");
    hijoP.classList.add("bg-gray");
    hijoP.classList.remove("a-scroll");
    hijoA.classList.add("a-scroll");
    hijoA.classList.remove("bg-gray");
  }
});




//For ABOUT button
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
