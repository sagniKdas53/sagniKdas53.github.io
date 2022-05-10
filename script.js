/*deprecated functions
1. this one shows the view box of the lavalamp
2. hides the stats
3. shows how the blobs animate
4. hides how the blobs animate
*/
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
// real stuff starts here
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

function keyMakerAll(nodes, numOfFrames, width, height, duration, init) {
    console.log(init);
    listnodes = [];
    for (var j = 0; j < nodes; j++) {
        listnodes.push(keyMaker3P(numOfFrames, width, height, duration));
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

/*keymaker3p:
the 3 p means three parts:
asecent --> stay at top --> descent
this takes in all the hight and makes key frames uning the above two funtions to make a reliatic 
blob floating animation.
*/
function keyMaker3P(numOfFrames, width, height, duration) {
    list = []
    var i;
    var tempAscent = 0;
    var direction = direction = anime.random(0, 1);
    if (direction == 0) {
        dir = anime.random(0, width);
    } else {
        dir = -anime.random(0, width);
    }
    var key = { translateY: 0, translateX: dir, duration: anime.random(2000, duration), state: 'up', dir: direction }
    list.push(key);
    var dir = 0
    var maxAscent = 0;
    while (height - tempAscent > 10) {
        tempAscent = anime.random(maxAscent, height)
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
        list.push(key);
    }
    var key = { translateY: 0, translateX: 0, duration: anime.random(2000, duration), state: 'down', dir: direction }
    list.push(key);
    //console.log('list:', list);
    return list;
}
// seeds the timeline with new keyframes
function updateTimeLine(blob, duration) {
    for (child of blob.children) { child['timelineOffset'] = anime.random(0, duration); }
    //for (child of blob.children) { child['duration'] = anime.random(0, duration); }
    //duration: blob.children[6]["duration"] / 2,

}

//defining the timeline's region of activity
var path2 = document.getElementById('body');
var heightP2 = Math.round(path2.getBBox()['height']);
var widthP2 = Math.round(path2.getBBox()['width']) / 2.5;
var duration = 4000;
var nodeT1 = keyMakerAll(4, 2, widthP2, heightP2, duration, init = true);
var nodeT2 = keyMakerAll(3, 2, widthP2, heightP2, duration, init = true);
var progress = document.querySelector('.log');
// the timeline
var T1 = anime.timeline({
    easing: 'easeInOutSine',
    elasticity: 60,
    complete: function (T1) {
        console.log('timeline one complete');
        nodeT1 = keyMakerAll(4, 2, widthP2, heightP2, duration, init = "one");
        nodeT2 = keyMakerAll(3, 2, widthP2, heightP2, duration, init = "two");
        updateTimeLine(T1, duration);
        T1.restart();
    },
    update: function () {
        progress.innerHTML = Math.round(T1.progress) + "%";
    }
});
/*
var T2 = anime.timeline({
    easing: 'easeInOutSine',
    elasticity: 60,
    complete: function (T2) {
        console.log('timeline two complete');
        nodeT2 = keyMakerAll(3, 2, widthP2, heightP2, duration);
        updateTimeLine(T2, duration);
        T2.restart();
    }
});*/
//Pauses the animation
document.getElementById('pause').onclick = T1.pause;
//Plays the animation
document.getElementById('play').onclick = T1.play;
// adding children to the timeline
T1.add({
    targets: '.one',
    keyframes: nodeT1[0], // the keyframes used here
}, anime.random(2000, duration))
    .add({
        targets: '.two',
        keyframes: nodeT1[1],
    }, anime.random(2000, duration)).add({
        targets: '.three',
        keyframes: nodeT1[2],
    }, anime.random(2000, duration)).add({
        targets: '.four',
        keyframes: nodeT1[3],
    }, anime.random(2000, duration)).add({
        targets: '.five',
        keyframes: nodeT2[0],
    }, anime.random(2000, duration)).add({
        targets: '.six',
        keyframes: nodeT2[1],
    }, anime.random(2000, duration)).add({
        targets: '.seven',
        keyframes: nodeT2[3],
    }, anime.random(2000, duration));
/*
T2.add({
    targets: '.five',
    keyframes: nodeT2[0],
}, anime.random(2000, duration)).add({
    targets: '.six',
    keyframes: nodeT2[1],
}, anime.random(2000, duration)).add({
    targets: '.seven',
    keyframes: nodeT2[2],
}, anime.random(2000, duration));
*/
// selctoers for blob-base animtion
let shapes = document.querySelector('.base2');
let shapes1 = document.querySelector('.base3');

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
/*
The morph is not working properly nither can the duration be updated retroactively nor is the morphing effect smooth
make seven alt shapes for the seven blobs
*/
/* Todo:
Fix the clour scheme
Make the blobs genrate using javascript
Mak the buttons look like widget on windows vista that goes to the side.
*/


