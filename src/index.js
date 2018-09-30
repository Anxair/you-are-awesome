// DO WHATEVER YOU WANT HERE
let counter = 0;
let counter1 = 0;
const createEnumerableProperty = (WhatEverYouWant) => WhatEverYouWant;
const createNotEnumerableProperty = (WhatEverYouWant) => Symbol(WhatEverYouWant);
const createProtoMagicObject = () => {
    let magicObject = () => {
    };
    magicObject.prototype = magicObject.__proto__;
    return magicObject;
};
const incrementor = () => {
    counter++;

    function increment() {
        counter++;
        return increment;
    }

    increment.valueOf = () => counter;
    return increment;
};
const asyncIncrementor = () => {
    counter1++;

    function increment() {
        counter1++;
        return increment;
    }

    increment.valueOf = () => counter1;
    return increment;
};
const createIncrementer = () => {
    let incrementor = {};
    incrementor.index = 1;
    incrementor.next = function () {
        return {value: incrementor.index++, done: false}
    };
    incrementor[Symbol.iterator] = function* () {
        while (true)
            yield incrementor.index++;
    };
    return incrementor;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(param);
        }, 1000);
    });
    return promise;
};

const getDeepPropertiesCount = (obj) => {
    let deepCount = 0;
    for (let temp in obj) {
        deepCount++;
        deepCount += getDeepPropertiesCount(obj[temp]);
    }
    return deepCount;
};
const createSerializedObject = () => {
    return null;
};
const toBuffer = () => {
};
const sortByProto = (protoArray) => {

    function getDeepProto(obj) {
        let counter = 0;
        if (obj.__proto__ !== null) {
            counter++;
            counter += getDeepProto(obj.__proto__);
        }
        return counter;
    }
    protoArray.sort(function (x, y) {
        return getDeepProto(y) - getDeepProto(x);
    });
    return protoArray;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;