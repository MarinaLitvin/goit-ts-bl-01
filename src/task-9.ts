// 1. Створюємо інтерфейс Container з дженериком <T>
interface Container<T> {
  items: T[];
  addItem: (item: T) => void;
  getItem: (index: number) => T;
}

// 2. Створюємо два контейнери: numberContainer та stringContainer
const numberContainer: Container<number> = {
  items: [1, 2],

  addItem(item) {
    this.items.push(item);
  },

  getItem(index) {
    return this.items[index];
  },
};

console.log(numberContainer);

const stringContainer: Container<string> = {
  items: ["1", "2"],

  addItem(item) {
    this.items.push(item);
  },

  getItem(index) {
    return this.items[index];
  },
};

console.log(stringContainer);

// 4. Створюємо універсальну функцію getLastElement для будь-якого Container<T>
function getLastElement<T>(array: T[]): T {
  return array[array.length - 1];
}

getLastElement<string>(stringContainer.items);
getLastElement<number>(numberContainer.items);
