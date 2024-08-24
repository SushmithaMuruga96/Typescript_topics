"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ts obj as arguments
function createUser(_a) {
    var string = _a.name, number = _a.ispaid;
}
createUser({ name: "sush", ispaid: false });
//return obj definition
function updateUser() {
    return { name: "sush", ispaid: false };
}
function updateNewUser(_a) {
    var string = _a.name, number = _a.ispaid;
    return {};
}
var user = { name: "sush", ispaid: false, email: "ss@g.com" };
updateNewUser(user);
