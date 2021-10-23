//write a random of my own and also replace gsap with kute

var randomduration = [50, 60, 70, 80, 90, 100][Math.floor(Math.random() * 6)]
//gsap.utils.random(50, 100, 10, true);
var randomx = [1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.2, 4.4, 4.6, 4.8, 5][Math.floor(Math.random() * 21)]
//gsap.utils.random(1, 5, 0.2, true);
var randomy = [1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.2, 4.4, 4.6, 4.8, 5, 5.2, 5.4, 5.6, 5.8, 6, 6.2, 6.4, 6.6, 6.8, 7, 7.2, 7.4, 7.6, 7.8, 8][Math.floor(Math.random() * 36)]
//gsap.utils.random(1, 8, 0.2, true);
var randomscale = [0.8, 0.9, 1, 1.1, 1.2][Math.floor(Math.random() * 5)]
//gsap.utils.random(0.8, 1.2, 0.1, true);

let lavalamp = gsap.timeline({ defaults: { duration: randomduration, repeat: -1, } });
console.log([randomduration, randomscale, randomx, randomy])
lavalamp
    .to(".blobbase", {
        ease: "circ.inOut",
        yoyo: true,
        duration: 40,
        transformOrigin: "center center",
        //morphSVG: "#basemorphto",
    })
    .to(".blobbase", {
        duration: 45,
        scale: 1.7,
        ease: "sine.inOut",
        yoyo: true,
        transformOrigin: "center center",
    }, "<")
    .to(".blob", {
        scale: randomscale,
        ease: "power1.inOut",
        yoyo: true,
    }, "<")
    .to("#blobfill", {
        translateX: "80px",
    }, "<")
    .to("#blob1", {
        motionPath: {
            path: "#blobpath1",
            align: "#blobpath1",
            alignOrigin: [0.5, 0.5],
        },

        ease: "power2.inOut",
    }, "<")
    .to("#blob2", {
        motionPath: {
            path: "#blobpath2",
            align: "#blobpath2",
            alignOrigin: [0.5, 0.5],
        },
        ease: "power1.inOut",
    }, "<")
    .to("#blobgroup", {
        motionPath: {
            path: "#blobgrouppath",
            align: "#blobgrouppath",
            alignOrigin: [0.5, 0.5],
        },
        ease: "sine.inOut",
    }, "<")
    .to("#blobgroup", {
        rotate: 360,
        ease: "sine.inOut",
    }, "<")
    .to("#groupblob1", {
        x: randomx,
        y: randomy,
        yoyo: true,
        ease: "back.inOut",
    }, "<")
    .to("#groupblob2", {
        x: -randomx,
        y: -randomy,
        yoyo: true,
        ease: "back.inOut",
    }, "<")
    ;


const base = KUTE.fromTo(
    '#basemorphto1',
    { path: '#basemorphto1' },
    { path: '#basemorphto2' },
    { repeat: 999, duration: 2000, yoyo: true }
).start();
