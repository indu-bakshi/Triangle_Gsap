
let tl=gsap.timeline({
    scrollTrigger:{
        trigger:'#try',
        start:'500px bottom',
        end: "bottom -150%",
        scrub:2
    }
})


tl.staggerTo(".cls-1",50,{opacity:-0.5, rotation:180, ease:Power1},-0.3);
tl.to("#cls-2",{opacity:0,duration:3},"-=60");
tl.to(".circle",{opacity:0,duration:7},"-=60");
