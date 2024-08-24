"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//addnum(): number  represents the return type of the function
function addnum(num) {
    return num + 2;
}
function toUpper(value) {
    return value.toUpperCase();
}
function signup(name, email, ispaid) { }
var login = function (name, email, ispaid) {
    if (ispaid === void 0) { ispaid = false; }
};
addnum(2);
var myvalue = toUpper("sushmitha");
signup("sush", "ss@gmail.com", false);
login("sush", "ss@gmail.com", false);
function getValue(s) {
    return "";
}
var getValuInArrfunc = function (s) {
    return "";
};
var heros = ["spiderman", "ironman", "marvel"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
//void data type for function that will no return values
function consoleErrMsg(err) {
    console.log(err);
}
//never used when  funct never return anything return value never be read example in throw stop the execution
function handleErr(err) {
    throw new Error(err);
}
