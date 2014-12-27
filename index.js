var dirt = [
    "path",
    "timestamp",
    "latency",
    "sound",
    "offset",
    "begin",
    "end",
    "speed",
    "pan",
    "velocity",
    "vowel",
    "cutoff",
    "resonance",
    "accelerate",
    "shape",
    "kriole",
    "gain",
    "cut",
    "delay",
    "delaytime",
    "delayfeedback",
    "crush",
    "coarse",
    "hcutoff",
    "hresonance",
    "bandf",
    "bandq"
];

function _zip(a,b){
    if (a == null) return {};
    var result = {};
    for (var i = 0, length = a.length; i < length; i++) {
      if (b) {
        result[a[i]] = b[i];
      } else {
        result[a[i][0]] = b[i][1];
      }
    }
    return result; 
};

module.exports = function(a,shape){
    if(shape==undefined){
        return _zip(dirt,a);
    }else{
        return _zip(shape,a);
    }
};
