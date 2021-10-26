//keymaker
function keyMaker3P(numOfFrames, width, height, duration) {
    list = []
    var i;
    var tempAscent = 0;
    var maxAscent = 0;
    while (height - tempAscent > 10) {
        tempAscent = anime.random(maxAscent, height)
        var key = { translateY: -tempAscent, translateX: anime.random(0, width), duration: anime.random(2000, duration), state: 'up' }
        if (tempAscent > maxAscent) {
            maxAscent = tempAscent;
        }
        list.push(key);
    } //once ascent is competed tempAscent becomes the height it can reach
    for (i = 0; i < numOfFrames; i++) {
        var key = { translateY: -tempAscent, translateX: anime.random(0, width), duration: anime.random(2000, duration), state: 'hori' }
        list.push(key);
    }
    maxAscent = tempAscent;
    while (tempAscent > 10) {
        tempAscent = anime.random(0, maxAscent);
        var key = { translateY: -tempAscent, translateX: anime.random(0, width), duration: anime.random(2000, duration), state: 'down' }
        list.push(key);
    }
    var key = { translateY: 0, translateX: 0, duration: anime.random(0, 2000) }
    list.push(key);
    console.log('list:', list);
    return list;
}


var large = [{
        "translateY": -21,
        "translateX": 4,
        "duration": 2242,
        "state": "up"
    },
    {
        "translateY": -45,
        "translateX": 4,
        "duration": 2216,
        "state": "up"
    },
    {
        "translateY": -59,
        "translateX": 5,
        "duration": 2128,
        "state": "up"
    },
    {
        "translateY": -59,
        "translateX": 3,
        "duration": 3408,
        "state": "hori"
    },
    {
        "translateY": -59,
        "translateX": 1,
        "duration": 2575,
        "state": "hori"
    },
    {
        "translateY": -27,
        "translateX": 5,
        "duration": 2840,
        "state": "down"
    },
    {
        "translateY": -44,
        "translateX": 1,
        "duration": 2206,
        "state": "down"
    },
    {
        "translateY": -14,
        "translateX": 2,
        "duration": 3228,
        "state": "down"
    },
    {
        "translateY": -59,
        "translateX": 4,
        "duration": 3374,
        "state": "down"
    },
    {
        "translateY": -44,
        "translateX": 5,
        "duration": 2442,
        "state": "down"
    },
    {
        "translateY": -36,
        "translateX": 3,
        "duration": 2633,
        "state": "down"
    },
    {
        "translateY": -51,
        "translateX": 3,
        "duration": 3920,
        "state": "down"
    },
    {
        "translateY": -40,
        "translateX": 2,
        "duration": 2957,
        "state": "down"
    },
    {
        "translateY": -19,
        "translateX": 0,
        "duration": 3951,
        "state": "down"
    },
    {
        "translateY": -45,
        "translateX": 4,
        "duration": 2470,
        "state": "down"
    },
    {
        "translateY": -48,
        "translateX": 0,
        "duration": 2979,
        "state": "down"
    },
    {
        "translateY": -41,
        "translateX": 2,
        "duration": 2602,
        "state": "down"
    },
    {
        "translateY": -41,
        "translateX": 5,
        "duration": 3780,
        "state": "down"
    },
    {
        "translateY": -22,
        "translateX": 5,
        "duration": 2481,
        "state": "down"
    },
    {
        "translateY": -55,
        "translateX": 1,
        "duration": 3581,
        "state": "down"
    },
    {
        "translateY": -21,
        "translateX": 2,
        "duration": 3544,
        "state": "down"
    },
    {
        "translateY": -36,
        "translateX": 2,
        "duration": 3721,
        "state": "down"
    },
    {
        "translateY": -19,
        "translateX": 5,
        "duration": 2894,
        "state": "down"
    },
    {
        "translateY": -57,
        "translateX": 3,
        "duration": 3997,
        "state": "down"
    },
    {
        "translateY": -56,
        "translateX": 4,
        "duration": 3160,
        "state": "down"
    },
    {
        "translateY": -42,
        "translateX": 4,
        "duration": 3192,
        "state": "down"
    },
    {
        "translateY": -17,
        "translateX": 4,
        "duration": 3994,
        "state": "down"
    },
    {
        "translateY": -47,
        "translateX": 0,
        "duration": 2445,
        "state": "down"
    },
    {
        "translateY": -54,
        "translateX": 1,
        "duration": 2815,
        "state": "down"
    },
    {
        "translateY": -39,
        "translateX": 1,
        "duration": 2500,
        "state": "down"
    },
    {
        "translateY": -43,
        "translateX": 5,
        "duration": 2414,
        "state": "down"
    },
    {
        "translateY": -57,
        "translateX": 5,
        "duration": 3843,
        "state": "down"
    },
    {
        "translateY": -19,
        "translateX": 3,
        "duration": 3017,
        "state": "down"
    },
    {
        "translateY": -52,
        "translateX": 4,
        "duration": 3054,
        "state": "down"
    },
    {
        "translateY": -51,
        "translateX": 4,
        "duration": 3088,
        "state": "down"
    },
    {
        "translateY": -51,
        "translateX": 2,
        "duration": 3372,
        "state": "down"
    },
    {
        "translateY": -7,
        "translateX": 4,
        "duration": 2603,
        "state": "down"
    },
    {
        "translateY": 0,
        "translateX": 0,
        "duration": 1933
    }
]