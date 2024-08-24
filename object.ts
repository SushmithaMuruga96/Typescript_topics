// ts obj as arguments
function createUser({ name: string, ispaid: number }) {}

createUser({ name: "sush", ispaid: false });

//return obj definition

function updateUser(): { name: string; ispaid: boolean } {
  return { name: "sush", ispaid: false };
}

function updateNewUser({ name: string, ispaid: number }): {} {
  return {};
}

const user = { name: "sush", ispaid: false, email: "ss@g.com" };

updateNewUser(user);
//user obj should throw error because we pass three keys but expection was two keys
//bad behavior of obj

export {};
