//addnum(): number  represents the return type of the function
function addnum(num: number): number {
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

function getValue(s: string): string {
  return "";
}

const getValuInArrfunc = (s: string): string => {
  return "";
};

const heros = ["spiderman", "ironman", "marvel"];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

//void data type for function that will no return values
function consoleErrMsg(err: string): void {
  console.log(err);
}

//never used when  funct never return anything return value never be read example in throw stop the execution
function handleErr(err: string): never {
  throw new Error(err);
}

export {};
