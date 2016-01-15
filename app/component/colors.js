'use strict';


const scheme = [
    ['a', '#1D2751'],
    ['b', '#3D4F99'],
    ['c', '#00B7FF'],
    ['d', '#FF8840'],
    ['e', '#CC3F14']
];

let colors = {};

for (var [key, value] of scheme) {
    colors[key] = value;
    colors[`${key}_light`] = `${value}ee`;
}

module.exports = colors;