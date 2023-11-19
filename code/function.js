"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // num.toUppercase()
    // return num + 5
    return "hello life";
}
function addthree(num) {
    // num.toUppercase()
    return num + 5;
    // return "hello life"
}
function getUpper(vel) {
    return vel.toUpperCase();
}
function signUpUser(name, emial, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
}
signUpUser("man", "jah@ga.com");
var loginUser = function (name, email, isSold) { };
loginUser("life", "c@gmail.com", false);
getUpper("akindele");
// addTwo("4")
addTwo(5);
function checkOut(name) {
    if (name > 5) {
        return true;
    }
    // return "200 OK"
    return false;
}
var getHello = function (s) {
    return "";
};
var heros = ["like", "hate", "love"];
// const heros = [2, 5, 6]
heros.map(function (hero) {
    return "hero is ".concat(hero);
    // return 2
});
function consileErro(mssg) {
    console.log(mssg);
}
function handleErro(errmsg) {
    throw new Error(errmsg);
}
