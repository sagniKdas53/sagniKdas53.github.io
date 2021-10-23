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

function keyMakerAll(nodes, num, conx, cony, cont) {
    listnodes = [];
    for (var j = 0; j < nodes; j++) {
        list = []

        for (var i = 0; i < num; i++) {
            var key = { translateY: -anime.random(0, cony), translateX: anime.random(0, conx), duration: anime.random(2000, cont) }
            list.push(key);
        }
        console.log('list:', list);
        listnodes.push(list);
    }
    return listnodes;
}

function keyMaker(num, conx, cony, cont) {
    list = []
    for (var i = 0; i < num; i++) {
        var key = { translateY: -anime.random(0, cony), translateX: anime.random(0, conx), duration: anime.random(2000, cont) }
        list.push(key);
    }
    console.log('list:', list);
    return list;
}

var node = keyMakerAll(4, 5, 5, 70, 3000);
//var node = [];
//node.push(keyMaker(5, 5, 70, 3000));
var blob = anime.timeline({
    easing: 'easeInOutSine',
    //'easeOutBack',
    direction: 'alternate',
    complete: function(blob) {
        console.log('timeline complete');
        node = keyMakerAll(4, 5, 5, 70, 3000);
        blob.restart();
    }
});

blob.add({
    targets: '.one',
    keyframes: node[0],
}, 100).add({
    targets: '.two',
    keyframes: node[1],
}, 100).add({
    targets: '.blobs .three',
    keyframes: node[2],
}, 100).add({
    targets: '.blobs .four',
    keyframes: node[3],
}, 100);

let shapes = document.querySelector('.base2');

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
let shapes1 = document.querySelector('.base3');

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