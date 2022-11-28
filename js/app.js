// $(window).ready(function(){
// window.location.href = 'https://dndvorks-7d0b90.ingress-baronn.easywp.com/';
// });


$(window).on('load', function () {
    prog.play();
    setTimeout(function(){ $('.preload-txt').fadeOut(500); }, 4500);
    setTimeout(function(){ $('.preload').slideUp("swing");
    bnr.play();
}, 5000);
setTimeout(function(){ 
anime({
  targets:".particles-js-canvas-el",
  opacity:[0,1],
  easing: "easeOutExpo",
  duration:1000,
  loop:false
});
$('.js-canvas').fadeIn(500);
}, 5500);
});
  particlesJS("particles",{
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
const hero = document.querySelector('#banner')  
const text = hero.querySelector('h1')
const walk = 20; // px

function shadow(e) {
    const {
        offsetWidth: width,
        offsetHeight: height
    } = hero;
    let {
        offsetX: x,
        offsetY: y
    } = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(140, 135, 140, 0.7)`;
}
hero.addEventListener('mousemove', shadow) 

// Wrap every letter in a span
var textWrapper = document.querySelector('.l1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letters'>$&</span>");
var textWrapper = document.querySelector('.l2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letters'>$&</span>");
var textWrapper = document.querySelector('.l3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letters'>$&</span>");

var bnr = anime.timeline({loop: true, autoplay:false});
  bnr.add({
    targets: '.skills .l1 .letters',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  },"-=600").add({
    targets: '.skills .l1 .letters',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  })
  .add({
    targets: '.skills .l2 .letters',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  },"-=600").add({
    targets: '.skills .l2 .letters',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  })
  .add({
    targets: '.skills .l3 .letters',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  },"-=600").add({
    targets: '.skills .l3 .letters',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });

  var morphing = anime({
    targets: 'svg path',
    d: 'm-2,-110.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-139.92534,-24.11052 -264.85068,196.11055 -641.77607,0l0,-296.80101z',
    easing: 'easeOutQuad',
    duration: 9000,
    loop: true,  
    direction: 'alternate'
  });
  
  var animeBGline = anime({
    targets:".sub #bg-line rect",
    strokeDashoffset:[8000,0],
    easing: "easeOutQuad",
    duration: 8000,
    loop:false,
    autoplay:false
  });
  $(".dnav ul li a").each(function(){
    var dt = $(this).data("src");
    $(this).click(function(e){
      e.preventDefault();
      $(dt).fadeIn(1000);
     setTimeout(function(){animeBGline.restart();prelx.restart();tEch.restart();},300); 
    });
  });
  $(".close-btn").click(function(e){
    e.preventDefault();
    $(".sub").slideUp(300);
  });

  var textWrapper1 = document.querySelector('.abt-cont');
textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='lett'>$&</span>");
var prelx = anime.timeline({loop: false,autoplay:false})

  .add({
    targets:'#about h2',
    translateX:[-50, 0],
    opacity:[0,1],
    easing: "easeOutExpo",
    duration:1000
  })
  .add({
    targets: '.abt-cont .lett',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 300 + 30 * i
  },"-=500");


  // Wrap every letter in a span

    var textWrapper2 = document.querySelector(".tech1");
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='tech-letters'>$&</span>");
var textWrapper2 = document.querySelector(".tech2");
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='tech-letters'>$&</span>");
var textWrapper2 = document.querySelector(".tech3");
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='tech-letters'>$&</span>");
var textWrapper2 = document.querySelector(".tech4");
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='tech-letters'>$&</span>");
var textWrapper2 = document.querySelector(".tech5");
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='tech-letters'>$&</span>");
var textWrapper2 = document.querySelector(".tech6");
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='tech-letters'>$&</span>");
var textWrapper2 = document.querySelector(".tech7");
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='tech-letters'>$&</span>");

var tEch = anime.timeline({loop: false,autoplay:false})
.add({
  targets:'.stuff h4',
  translateX:[-50, 0],
  opacity:[0,1],
  easing: "easeOutExpo",
  duration:1000
})
  .add({
    targets: '.tech1 .tech-letters',
    opacity:[0,1],
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 300,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  })
  .add({
    targets: '.tech2 .tech-letters',
    opacity:[0,1],
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 300,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  })
  .add({
    targets: '.tech3 .tech-letters',
    opacity:[0,1],
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 300,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  })
  .add({
    targets: '.tech4 .tech-letters',
    opacity:[0,1],
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 300,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  })
  .add({
    targets: '.tech5 .tech-letters',
    opacity:[0,1],
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 300,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  })
  .add({
    targets: '.tech6 .tech-letters',
    opacity:[0,1],
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 300,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  })
  .add({
    targets: '.tech7 .tech-letters',
    opacity:[0,1],
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 300,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  });

  const canvas = document.querySelector('.js-canvas')
  const ctx = canvas.getContext('2d')
  
  let width = canvas.width = window.innerWidth
  let height = canvas.height = window.innerHeight
  
  let mouseX = width / 2;
  let mouseY = height / 2;
  
  let circle = {
    radius: 10,
    lastX: mouseX,
    lastY: mouseY
  }
  
  const elems = [...document.querySelectorAll('[data-hover]')]
  
  function onResize () {
    width = canvas.width = window.innerWidth
    height = canvas.height = window.innerHeight
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
    
    let m = anime({
      targets: circle,
      duration:500,
      radius: circle.radius * 3,
      autoplay:false,
      easing: "easeOutExpo",
      loop:false
    });
    let m1 = anime({
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
$(".my-works li a").each(function(){
  var imgsrc =  $(this).attr("data-src");
  $( this).mouseenter(function() {
    $(".works-image").css( "background-image",'url('+imgsrc+')' );
    setTimeout(function(){ $('.works-image').fadeIn(1000); }, 100);
  });
});
$(".my-works li a").each(function(){
  var imgsrc =  $(this).attr("data-src");
  $( this).mouseleave(function() {
    $(".works-image").css( "background-image",'url()' );
    $('.works-image').fadeOut(500);
  });
});
  
  function lerp(a, b, n) {
    return (1 - n) * a + n * b
  }
  
  init();


var textWrapper = document.querySelector('.txt-1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='txt1'>$&</span>");
var textWrapper = document.querySelector('.txt-2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='txt1'>$&</span>");
var textWrapper = document.querySelector('.txt-3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='txt1'>$&</span>");
var prel = anime.timeline({loop: true})
  .add({
    targets: '.txt-1 .txt1',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 300,
    delay: (el, i) => 300 + 30 * i
  }).add({
    targets: '.txt-1 .txt1',
    translateY: [0,-100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 300,
    delay: (el, i) => 100 + 30 * i
  })
  .add({
    targets: '.txt-2 .txt1',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 300,
    delay: (el, i) => 300 + 30 * i
  }).add({
    targets: '.txt-2 .txt1',
    translateY: [0,-100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 300,
    delay: (el, i) => 100 + 30 * i
  })
  .add({
    targets: '.txt-3 .txt1',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 300,
    delay: (el, i) => 300 + 30 * i
  }).add({
    targets: '.txt-3 .txt1',
    translateY: [0,-100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 300,
    delay: (el, i) => 100 + 30 * i
  });

  var prog = anime({
    targets: ".preload-txt svg rect",
    easing: "easeInExpo",
    strokeDashoffset:[1200,0],
    duration: 4500,
    loop:false,
    autoplay:false
  });
