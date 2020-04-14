function animateWithRandomNumber(myClass, from, to) {
    TweenLite.fromTo(myClass, Math.floor((Math.random() * 20) + 1), { y: from }, { y: to,
        onComplete: animateWithRandomNumber,
        onCompleteParams: [myClass, from, to],
        ease: Linear.easeNone });
}

const itemsDown = [".light4", ".light5", ".light6", ".light7", ".light8", ".light11", ".light12", ".light13", ".light14", ".light15", ".light16"]
.forEach(e => animateWithRandomNumber(e, -1080, 1080))
const itemsUp = [".light1", ".light2", ".light3",".light9", ".light10", ".light17"]
.forEach(e => animateWithRandomNumber(e, 1080, -1080));

// const controller = new ScrollMagic.Controller();

// var tl = gsap.timeline();
// 	tl.from("#sec_2 h1", { duration: 0.75, y: 30 , height:"100%"}, "text");
// 	tl.to("#sec_2 h1", { duration: 1, opacity: 0, ease:"none" }, "+=2");
// var scene = new ScrollMagic.Scene({
// 							triggerElement: "#sec_1",
// 					        triggerHook: "onEnter"
// 						})
// 						.setTween(tl) // trigger a TweenMax.to tween
// 						.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
// 						.addTo(controller);


//Smooth Scrolling Transition


var html = document.documentElement;
var body = document.body;

var scroller = {
  target: document.querySelector("#scroll-container"),
  ease: 0.05, // <= scroll speed
  endY: 0,
  y: 0,
  resizeRequest: 1,
  scrollRequest: 0,
};

var requestId = null;

TweenLite.set(scroller.target, {
  rotation: 0.01,
  force3D: true
});

window.addEventListener("load", onLoad);

function onLoad() {    
  updateScroller();  
  window.focus();
  window.addEventListener("resize", onResize);
  document.addEventListener("scroll", onScroll); 
}

function updateScroller() {
  
  var resized = scroller.resizeRequest > 0;
    
  if (resized) {    
    var height = scroller.target.clientHeight;
    body.style.height = height + "px";
    scroller.resizeRequest = 0;
  }
      
  var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

  scroller.endY = scrollY;
  scroller.y += (scrollY - scroller.y) * scroller.ease;

  if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
    scroller.y = scrollY;
    scroller.scrollRequest = 0;
  }
  
  TweenLite.set(scroller.target, { 
    y: -scroller.y 
  });
  
  requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
}

function onScroll() {
  scroller.scrollRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}

function onResize() {
  scroller.resizeRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}
