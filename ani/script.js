function showStats() {
    var logEl = document.querySelector('.log');
    var el = document.querySelector('.lava-lamp');

    logEl.innerHTML += '".lava-lamp" width is :';
    logEl.innerHTML += '"' + anime.get(el, 'width', 'px') + '"';
    logEl.innerHTML += ' or "' + anime.get(el, 'width', 'rem') + 'rem"<br>'
    logEl.innerHTML += '".lava-lamp" height is :';
    logEl.innerHTML += '"' + anime.get(el, 'height', 'px') + '"';
    logEl.innerHTML += ' or "' + anime.get(el, 'height', 'rem') + 'rem"'
}

function hideStats() {
    var logEl = document.querySelector('.log');
    logEl.innerHTML = ""
}

function clip() {
    var clipTarge = document.getElementById('blobmotionarea');
    clipTarge.setAttribute('clip-path', "url(#blobclippath)")
}

function noClip() {
    var clipTarge = document.getElementById('blobmotionarea');
    clipTarge.removeAttribute('clip-path')
}
// these functions make the keyframes for the timeline, that will be made below
function keyMaker(numOfFrames, width, height, duration) {
    list = []
    for (var i = 0; i < numOfFrames; i++) {
        var key = { translateY: -anime.random(0, height), translateX: anime.random(0, width), duration: anime.random(2000, duration) }
        list.push(key);
    }
    var key = { translateY: 0, translateX: 0, duration: anime.random(2000, duration) }
    list.push(key);
    //console.log('list:', list);
    return list;
}

function keyMakerAll(nodes, numOfFrames, width, height, duration) {
    listnodes = [];
    for (var j = 0; j < nodes; j++) {
        if (j == 1) {
            width *= .8;
        }
        if (j >= 2) {
            height *= 1.5;
        }
        listnodes.push(keyMaker3P(3, width, height, duration));
    }
    return listnodes;
}
/*
To make the keyMaker even better, divide the timeline nodes into 3 parts,
one for ascent, maybe add 1/3 of all nodes as the asecnding keyframes, each higher than the next
once reached the higest value in 3 nodes, translate x for two keyframes at the top
then decent uing 1-2 key frames, each lower than the other and finally the keyMakerAll will add the last
ketframe that is to go to zero,zero.

The direction (0,1) chooses left or right convection, 0 for right and 1 for left, conversly when at top or while coming down 
the direction has opposite effect.

Notes: The ascending duration should be high, the translateX at top shoud be small and the descent should be medium.
*/

//keymaker
function keyMaker3P(numOfFrames, width, height, duration) {
    list = []
    var i;
    var tempAscent = 0;
    var direction = 0;
    var dir = 0
    var maxAscent = 0;
    while (height - tempAscent > 10) {
        tempAscent = anime.random(maxAscent, height)
        direction = anime.random(0, 1);
        if (direction == 0) {
            dir = anime.random(0, width);
        } else {
            dir = -anime.random(0, width);
        }
        var key = { translateY: -tempAscent, translateX: dir, duration: anime.random(2000, duration), state: 'up', dir: direction }
        if (tempAscent > maxAscent) {
            maxAscent = tempAscent;
        }
        list.push(key);
    } //once ascent is competed tempAscent becomes the height it can reach
    for (i = 0; i < numOfFrames; i++) {
        if (direction == 0) {
            dir = -anime.random(0, width);
        } else {
            dir = anime.random(0, width);
        }
        var key = { translateY: -tempAscent, translateX: dir, duration: anime.random(2000, duration), state: 'hori', dir: direction }
        list.push(key);
    }
    //maxAscent = tempAscent;
    while (tempAscent > 10) {
        tempAscent = anime.random(0, tempAscent);
        if (direction == 0) {
            dir = -anime.random(0, width);
        } else {
            dir = anime.random(0, width);
        }
        var key = { translateY: -tempAscent, translateX: dir, duration: anime.random(2000, duration), state: 'down', dir: direction }
            //maxAscent = tempAscent;
        list.push(key);
    }
    var key = { translateY: 0, translateX: 0, duration: anime.random(0, 2000) }
    list.push(key);
    console.log('list:', list);
    return list;
}

//defining the timeline's region of activity
var path2 = document.getElementById('body');
var heightP2 = Math.round(path2.getBBox()['height']);
var widthP2 = Math.round(path2.getBBox()['width']) / 5;
var node = keyMakerAll(7, 8, widthP2, heightP2, 4000);
// the timeline
var blob = anime.timeline({
    easing: 'easeInOutSine',
    //'easeOutElastic',
    //'easeOutBack',
    //direction: 'alternate',
    elasticity: 60,
    complete: function(blob) {
        console.log('timeline complete');
        //node = keyMakerAll(7, 8, widthP2, heightP2, 4000);
        //blob.restart();
    }
});
document.querySelector('.play').onclick = blob.play;
document.querySelector('.pause').onclick = blob.pause;

// adding children to the timeline
blob.add({
    targets: '.one',
    keyframes: node[0], // the keyframes used here
}, 100).add({
    targets: '.two',
    keyframes: node[1],
}, 100).add({
    targets: '.three',
    keyframes: node[2],
}, 100).add({
    targets: '.four',
    keyframes: node[3],
}, 100).add({
    targets: '.five',
    keyframes: node[4],
}, 100).add({
    targets: '.six',
    keyframes: node[5],
}, 100).add({
    targets: '.seven',
    keyframes: node[6],
}, 100);

// selctoers for blob-base animtion
let shapes = document.querySelector('.base2');
let shapes1 = document.querySelector('.base3');
/* Add this later
// animating blob base 2 using svg morph
// animating blob base 1 using svg morph
var blobase1 = anime({
    targets: '.base1',
    d: shapes.getAttribute('d'),
    duration: 5000,
    autoplay: true,
    easing: 'easeInElastic',
    direction: 'alternate',
    elasticity: 100,
    loop: true
});

var blobase2 = anime({
    targets: '.base0',
    d: shapes1.getAttribute('d'),
    duration: 8000,
    autoplay: true,
    easing: 'easeInElastic',
    direction: 'alternate',
    elasticity: 60,
    loop: true
});

// applying svg mprph to blob one
var blobone = anime({
    targets: '.one',
    d: 'm 51.299,75.069 c -7.257928,-0.02835 -9.110325,2.841953 -10.741626,0.03108 -0.687402,-2.429514 0.359615,-5.897828 3.638971,-5.991684 3.37622,-0.10261 8.826682,3.087525 7.102655,5.960607',
    duration: 8000,
    autoplay: true,
    easing: 'easeInElastic',
    direction: 'alternate',
    elasticity: 60,
    loop: true
})
*/