function animateWithRandomNumber(myClass, from, to) {
    TweenLite.fromTo(myClass, Math.floor((Math.random() * 20) + 1), { y: from }, { y: to,
        onComplete: animateWithRandomNumber,
        onCompleteParams: [myClass, from, to],
        ease: Linear.easeNone });
}

const itemsDown = [".light4", ".light5", ".light6", ".light7", ".light8", ".light11", ".light12", ".light13", ".light14", ".light15", ".light16"]
.forEach(e => animateWithRandomNumber(e, -1080, 1080))
const itemsUp = [".light1", ".light2", ".light3",".light9", ".light10", ".light17"]
.forEach(e => animateWithRandomNumber(e, 1080, -1080))



const controller = new ScrollMagic.Controller();

var tl = gsap.timeline();
	tl.from("#upper", { duration: 0.75, y: 30 }, "text");
	tl.to("#upper", { duration: 1, opacity: 0, ease:"none" }, "+=2");
var scene = new ScrollMagic.Scene({
							triggerElement: "#sec_1"
					        triggerHook: "onEnter",
						})
						.setTween("#animate1", 0.5, {backgroundColor: "green", scale: 2.5}) // trigger a TweenMax.to tween
						.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
						.addTo(controller);
