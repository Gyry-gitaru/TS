// Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання. 
// Наприклад, тип значення для кожного ключа може бути число | рядок.

interface User {
  [key: string]: string | number;
}

const userInfo: User = {
  name: "Yana",
  surname: "Chelysheva",
  age: 28,
};

// Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями. 
// Ключами можуть бути рядки, а значеннями — функції, які приймають будь-які аргументи.

interface FunctionMap {
  [key: string]: (...args: any[]) => any;
}

const functions: FunctionMap = {
  greet: (name: string) => `Hello, ${name}!`,
  log: (message: string) => console.log(message),
};

// Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, 
// подібного до масиву. Ключі повинні бути числами, а значення - певного типу.

interface LikeArray {
  [key: number]: string;
}

const myArray: LikeArray = {
  0: "Hello",
  1: "World",
  2: "and",
  3: "TypeScript",
}

// Створіть інтерфейс з певними властивостями та індексною сигнатурою. 
// Наприклад, ви можете мати властивості типу name: string та індексну сигнатуру для додаткових динамічних властивостей.

interface UserProfile {
  name: string;
  age?: number;
  [key: string]: any; 
}

const user: UserProfile = {
  name: "Yana Chelysheva",
  age: 28,
  email: "yanayana@example.com",
  isAdmin: true
};

// Створіть два інтерфейси, один з індексною сигнатурою, а інший розширює перший, додаючи специфічні властивості.

interface DynamicAttributes {
  [key: string]: string; 
}

interface Person extends DynamicAttributes {
  name: string; 
  email: string; 
}

const personInfo: Person = {
  name: "John Doe",
  email: "john.doe@example.com",
  age: "30", 
  occupation: "Software Developer"
};

// Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, чи відповідають значення певних ключів певним критеріям (наприклад, чи всі значення є числами).

function areValuesNumbers(obj: { [key: string]: any }, keys: string[]): boolean {
  return keys.every(key => typeof obj[key] === 'number');
}

const data = {
  id: 123,
  name: "Alice",
  age: 30,
  height: 175
};

const result = areValuesNumbers(data, ["id", "age", "height"]); 
const result2 = areValuesNumbers(data, ["id", "name"]); 

console.log(result);  // Output: true
console.log(result2); // Output: false

