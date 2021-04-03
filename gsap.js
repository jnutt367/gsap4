gsap.to(".box", {
    y: 100,
    duration: 0.3,

    stagger: {
        each: 0.3,
        from: "start",
        repeat: -1,
        yoyo: true,
    }

});