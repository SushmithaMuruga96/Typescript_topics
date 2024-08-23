function addnum(num: number) {
  return num + 2;
}

function toUpper(value: string) {
  return value.toUpperCase();
}

function signup(name: string, email: string, ispaid: boolean) {}

const login = (name: string, email: string, ispaid: boolean = false) => {};

addnum(2);
let myvalue = toUpper("sushmitha");
signup("sush", "ss@gmail.com", false);
login("sush", "ss@gmail.com", false);

export {};
