
var blur_el = document.getElementById("blur");
var blur_val = document.getElementById("blur-val");
var cont_el = document.getElementById("contrast");
var cont_val = document.getElementById("contrast-val");
var brightness_el = document.getElementById("brightness");
var brightness_val = document.getElementById("brightness-val");
var bright = brightness_val.innerHTML;
var blur = blur_val.innerHTML;
var contrast = cont_val.innerHTML;

var area = $(".all-blobs")
var blob = $(".blob")
var blob_dark = $(".blob-dark")

blur_el.oninput = function () {
    console.log(this.value);
    blur_val.innerHTML = " " + this.value;
    blob.css({
        // I thought jQuery did prefixing automatically, but apparently not for this.
        "-webkit-filter": "blur(" + this.value + "px)",
        "filter": "blur(" + this.value + "px)"
    });
    blob_dark.css({
        // I thought jQuery did prefixing automatically, but apparently not for this.
        "-webkit-filter": "blur(" + this.value + "px)",
        "filter": "blur(" + this.value + "px)"
    });
}

cont_el.oninput = function () {
    console.log(this.value);
    cont_val.innerHTML = " " + this.value;
    contrast = this.value;
    area.css({
        "-webkit-filter": "brightness(" + bright + ") contrast(" + this.value + ")",
        "filter": "brightness(" + bright + ") contrast(" + this.value + ")"
    });
}

brightness_el.oninput = function () {
    console.log(this.value);
    brightness_val.innerHTML = " " + this.value;
    bright = this.value;
    area.css({
        "-webkit-filter": "brightness(" + this.value + ") contrast(" + contrast + ")",
        "filter": "brightness(" + this.value + ") contrast(" + contrast + ")"
    });
}