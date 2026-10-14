// Задача 11

// 1. Створіть власний тип User, який має:

// обов'язкове поле username (рядок)
// обов'язкове поле age (число)
// опціональне поле city (рядок)

type User = {
  username: string;
  age: number;
  city?: string;
};

// 2. Створіть літеральний тип Role, який може мати значення "admin", "user", "guest".

type Role = "admin" | "user" | "guest";

// 3. Оголосіть функцію createUserCard, вона має приймати:

// перший параметр — об'єкт типу <User>
// другий параметр — роль користувача типу Role
// 4. Функція повертає рядок у форматі "[username] ([age]) — [role] from [city]”.
// 5. Якщо city немає — виводьте "Unknown".

function createUserCard(user: User, role: Role): string {
  return `${user.username} (${user.age}) — ${role} from ${user.city || "Unknown"}`;
}

console.log(
  createUserCard({ username: "Anna", age: 25, city: "Kyiv" }, "admin"),
);

console.log(createUserCard({ username: "Max", age: 30 }, "guest"));
