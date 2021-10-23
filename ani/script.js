var logEl = document.querySelector('.log');
var el = document.querySelector('.lava-lamp');
var angle = document.querySelector('.angle');

logEl.innerHTML += '".lava-lamp" width is :';
logEl.innerHTML += '"' + anime.get(el, 'width', 'px') + '"';
logEl.innerHTML += ' or "' + anime.get(el, 'width', 'rem') + 'rem"<br>'
logEl.innerHTML += '".lava-lamp" height is :';
logEl.innerHTML += '"' + anime.get(el, 'height', 'px') + '"';
logEl.innerHTML += ' or "' + anime.get(el, 'height', 'rem') + 'rem"'

function clip() {
    var clipTarge = document.getElementById('blobmotionarea');
    clipTarge.setAttribute('clip-path', "url(#blobclippath)")
}

function noClip() {
    var clipTarge = document.getElementById('blobmotionarea');
    clipTarge.removeAttribute('clip-path')
}

function keyMaker(nodes, num, conx, cony, cont) {
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


var blob1 = anime.timeline({
    easing: 'easeOutBack',
    direction: 'alternate',
    loop: true,
    loopComplete: function() {
        console.log('main timeline complete');
    }
});
var node = keyMaker(4, 5, 5, 70, 8000);
blob1.add({
    targets: '.blobs .one',
    keyframes: node[0],
}, 100).add({
    targets: '.blobs .two',
    keyframes: node[1],
}, 100).add({
    targets: '.blobs .three',
    keyframes: node[2],
}, 100).add({
    targets: '.blobs .four',
    keyframes: node[3],
    complete: function(anim) {
        console.log('full timeline complete');
        node = keyMaker(4, 5, 5, 70, 8000);
    }
}, 100);