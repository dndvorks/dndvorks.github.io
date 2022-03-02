// var controller = new ScrollMagic.Controller();
// const sections = document.querySelectorAll("section");

// // this scrolling object just allows us to conveniently call scrolling.enable(), scrolling.disable(), and check if scrolling.enabled is true. 
// // some browsers (like iOS Safari) handle scrolling on a separate thread and can cause things to get out of sync (jitter/jumpy), so when we're animating the scroll position, force an update of GSAP tweens when there's a scroll event in order to maintain synchronization)
// const scrolling = {
//     enabled: true,
//     events: "scroll,wheel,touchmove,pointermove".split(","),
//     prevent: e => e.preventDefault(),
//     disable() {
//       if (scrolling.enabled) {
//         scrolling.enabled = false;
//         window.addEventListener("scroll", gsap.ticker.tick, {passive: true});
//         scrolling.events.forEach((e, i) => (i ? document : window).addEventListener(e, scrolling.prevent, {passive: false}));
//       }
//     },
//     enable() {
//       if (!scrolling.enabled) {
//         scrolling.enabled = true;
//         window.removeEventListener("scroll", gsap.ticker.tick);
//         scrolling.events.forEach((e, i) => (i ? document : window).removeEventListener(e, scrolling.prevent));
//       }
//     }
//   };


// function goToSection(section, anim, i) {
//   if (scrolling.enabled) { // skip if a scroll tween is in progress
//     scrolling.disable();
//     gsap.to(window, {
//       scrollTo: {y: section, autoKill: false},
//       onComplete: scrolling.enable,
//       duration: .3
//     });

//     anim && anim.restart();
//   }
// }

// sections.forEach((section, i) => {
//   const intoAnim = gsap.from(section.querySelector(".right-col"), {yPercent: 50, duration: 0.3, paused: true});
  
//   ScrollTrigger.create({
//     trigger: section,
//     start: "top bottom-=1",
//     end: "bottom top+=1",
//     onEnter: () => goToSection(section, intoAnim),
//     onEnterBack: () => goToSection(section)
//   });
 
// });
// var preloadx = gsap.timeline({paused:true});
// preloadx.to('.slide1',{duration:1, left:0})
// .to('.slide2',{duration:1, left:0},"-=0.5")
// .to('.preloader',{duration:0.5, display:"none",opacity:0},"-=0.5");
// var tl = gsap.timeline({paused:true});

// tl.from('.hero .r-img', {duration:.5, opacity:0, x:50})
// .from('.hero h1', {duration:.5, opacity:0, y:50},"-=0.3")
// .from('.hero p', {duration:.5, opacity:0, y:50},"-=0.3")
// .from('.hero .btn', {duration:.5, opacity:0, y:50, stagger:0.3},"-=0.3")
// .from('.hero .circ', {duration:.5, opacity:0, top:50, stagger:0.3},"-=0.3");
// $(window).on('load',function(){
//     preloadx.play();
//     setTimeout(function(){
//         tl.play();
//     },1000)
// });

// var tl2 = gsap.timeline({paused:true});
// tl2.from('.cont',{duration:1,y:50,opacity:0,stagger:0.5})
// .to('.inner .preaload1',{duration:0.3,opacity:0,stagger:0.3},"-=0.3")
// .to('.inner .loader1',{duration:0.3,opacity:0},"-=0.3")
// .to('.inner .loader',{duration:0.3,opacity:0},"-=0.3")
// .to('.inner',{duration:1,opacity:0,stagger:0.5},"-=0.5");

// var scene = new ScrollMagic.Scene({
//     triggerElement: "#first",
//     duration: 1000,
//     reverse: false
// })
// .on("enter",function(event){
//     tl2.play();
// })
// .addTo(controller);
var scene = document.getElementById('js-scene');
var parallax = new Parallax(scene);


gsap.utils.toArray(".box").forEach(star => {
  tweenProperty(star, "x", -20, 20);
  tweenProperty(star, "y", -40, 40);
});


function tweenProperty(target, prop, min, max) {
  
  var randomDur = gsap.utils.random(3, 6, 0.2, true);
  var randomDelay = gsap.utils.random(0.6, 2, 0.2, true);

  gsap.to(target,  {
    [prop]: gsap.utils.random(min, max),
    duration: randomDur(), 
    delay: randomDelay(), 
    ease: 'none',
    onComplete: tweenProperty,
    onCompleteParams: [target, prop, min, max]
  });

}

function background(){
  
  var next = gsap.utils.random(3, 6, 0.5, true);
  var opa = gsap.utils.random(0.2, 1, 0.1, true);
  
  gsap.to('#svg01', {opacity:opa, duration:3, ease:'none'});
  
  var delayedCall = gsap.delayedCall(next, background);
  
}

background();

const canvas = document.querySelector('.js-canvas')
  const ctx = canvas.getContext('2d')
  
  var width = canvas.width = $('body').width();
  var height = canvas.height = $('body').height();
  
  var mouseX = width / 2;
  var mouseY = height / 2;
  
  var circle = {
    radius: 10,
    lastX: mouseX,
    lastY: mouseY
  }
  
  const elems = [...document.querySelectorAll('[data-hover]')]
  
  function onResize () {
    width = canvas.width = $('body').width();
    height = canvas.height = $('body').height();
  }
  
  function render () {
    circle.lastX = lerp(circle.lastX, mouseX, 0.25)
    circle.lastY = lerp(circle.lastY, mouseY, 0.25)
    
    ctx.clearRect(0, 0, width, height)
    ctx.beginPath()
    ctx.arc(circle.lastX, circle.lastY, circle.radius, 0, Math.PI * 2, false)
    ctx.fillStyle = "#ffffff"
    ctx.fill()
    ctx.closePath()
    
    requestAnimationFrame(render)
  }
  
  function init () {
    requestAnimationFrame(render)
    
    window.addEventListener('mousemove', function(e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
    })
  
    window.addEventListener('resize', onResize, false)
    
    var m = anime({
      targets: circle,
      duration:500,
      radius: circle.radius * 3,
      autoplay:false,
      easing: "easeOutExpo",
      loop:false
    });
    var m1 = anime({
      targets: circle,
      duration:500,
      radius: circle.radius,
      autoplay:false,
      easing: "easeOutExpo",
      loop:false
    });
    
    elems.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        m.play()
      }, false)
      el.addEventListener('mouseleave', () => {
        m1.play()
      }, false)
    })
  }
  function lerp(a, b, n) {
    return (1 - n) * a + n * b
  }
  init();