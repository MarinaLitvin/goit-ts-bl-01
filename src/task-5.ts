// Задача 5

//function createUser({name, age}) {
//   return {
//     name,
//     age,
//     isAdmin: false
//   };
// }

// Завдання:

// Типізуйте функцію повністю: параметри і повернення функції.

interface UserInput {
  name: string;
  age: number;
}
// interface UserResult extends UserInput {
//   isAdmin: boolean;
// }

type UserResult = UserInput & { isAdmin: boolean };

function createUser({ name, age }: UserInput): UserResult {
  return {
    name,
    age,
    isAdmin: false,
  };
}

createUser({ name: "Alice", age: 30 });
