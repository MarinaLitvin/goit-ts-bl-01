// Задача 1

// Опис: Є об'єкт settings, який містить налаштування.

// const settings = {
//   darkMode: true,
//   fontSize: 16,
//   language: "en",
// };

// Завдання:

// Створіть тип Settings, який описує цей об'єкт.
// Типізуйте settings через цей тип.

// 1. Створюємо тип Settings, який описує структуру об'єкта
type Settings = {
  darkMode: boolean;
  fontSize: number;
  language: string;
};

// 2. Типізуємо об'єкт settings через створений тип
const settings: Settings = {
  darkMode: true,
  fontSize: 16,
  language: "en",
};

console.log(settings);
