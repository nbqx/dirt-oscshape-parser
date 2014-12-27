var test = require('tape'),
    colorize = require('tap-colorize');

var parser = require('../.');

test.createStream().pipe(colorize()).pipe(process.stdout);

var _raw = [
    '/play',
    1419577375,
    794003,
    'test',
    0,
    0,
    1,
    1,
    0.5,
    0,
    '',
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    -1,
    -1,
    0,
    0,
    0,
    0,
    0,
    0
];

var parsed = {
    path: '/play',
    timestamp: 1419577375,
    latency: 794003,
    sound: 'test',
    offset: 0,
    begin: 0,
    end: 1,
    speed: 1,
    pan: 0.5,
    velocity: 0,
    vowel: '',
    cutoff: 0,
    resonance: 0,
    accelerate: 0,
    shape: 0,
    kriole: 0,
    gain: 1,
    cut: 0,
    delay: 0,
    delaytime: -1,
    delayfeedback: -1,
    crush: 0,
    coarse: 0,
    hcutoff: 0,
    hresonance: 0,
    bandf: 0,
    bandq: 0
};


test('test',function(t){
    var d = parser(_raw);
    t.same(d, parsed, "same result");
    t.end();
});
