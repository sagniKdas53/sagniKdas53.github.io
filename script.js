let random = function random(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
        return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
};

var randomduration = gsap.utils.random(50, 100, 10, true);
var randomx = gsap.utils.random(1, 5, 0.2, true);
var randomy = gsap.utils.random(1, 8, 0.2, true);
var randomscale = gsap.utils.random(0.8, 1.2, 0.1, true);

let lavalamp = gsap.timeline({ defaults: { duration: randomduration, repeat: -1, } });

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
