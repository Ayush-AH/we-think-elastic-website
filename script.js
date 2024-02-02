function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()
var clutter =""
document.querySelector("#page1 h1").textContent.split("").forEach(function(letter){
    clutter += `<span>${letter}</span>`
})
document.querySelector("#page1 h1").innerHTML = clutter

var tl1 = gsap.timeline()
tl1
.to("#loader",{
    top:"-100%",
    ease: "power2.in",
    duration:1,
    delay:2
})
.from("#page1 h1 span",{
    y:"100%",
    stagger:{
        amount:0.5
    },
    delay:-0.5
})

gsap.to("#navbar",{
    y:"-100%",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"top top",
        end:"top -10%",
        scrub:1,
    }
})
gsap.to("#video-container",{
    width:"100%",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        start:"top 100%",
        end:"top 0%",
        scrub:1,
    }
})


var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page5",
        scroller:"#main",
        start:"top top",
        end:"top -250%",
        pin:true,
        scrub:1,
    }
})
tl
.to("#page5 #txt",{
    x:"-60%",
},"a")
.to("#page5 img",{
    x:-100
},"a")


gsap.from("#page7 h1",{
    y:"100%",
    scrollTrigger:{
        trigger:"#page7",
        scroller:"#main",
        start:"top 85%",
        end:"top 40%",
        scrub:1,
    }
})





var img = document.querySelector("#loader img")
 var arr = ["https://wethinkelastic.com/assets/images/152c223f4359675788470.svg",
 "https://wethinkelastic.com/assets/images/24a07612b16472c6a503f.svg",
 "https://wethinkelastic.com/assets/images/338b04b3ad8edf6773599.svg",
 "https://wethinkelastic.com/assets/images/6a714ad31db5d83bc967b.svg",
 "https://wethinkelastic.com/assets/images/7c9e22462b51ae93b5a17.svg",
 "https://wethinkelastic.com/assets/images/8a2db0cd90582eb4b877d.svg",
 "https://wethinkelastic.com/assets/images/9e5b57420355774e0a99d.svg"
]

 setInterval(() => {
    var idx = Math.floor(Math.random()*arr.length)
    img.setAttribute("src",arr[idx])
 }, 200);




 document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        x:dets.x,
        y:dets.y
    })
 })

 document.querySelectorAll(".image-div").forEach(function(div){
    div.addEventListener("mousemove",function(){
        gsap.to("#cursor",{
            scale:1
        })
    })
 })
 document.querySelectorAll(".image-div").forEach(function(div){
    div.addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            scale:0
        })
    })
 })