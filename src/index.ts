type DeepReadonly<T> = T extends Function | Date | RegExp
  ? T
  : T extends Array<infer U>
  ? ReadonlyArray<DeepReadonly<U>>
  : T extends object
  ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
  : T;

type DeepRequireReadonly<T> = T extends Function | Date | RegExp
  ? T
  : T extends Array<infer U>
  ? ReadonlyArray<DeepRequireReadonly<U>>
  : T extends object
  ? { readonly [K in keyof Required<T>]: DeepRequireReadonly<Required<T>[K]> }
  : T;

type UpperCaseKeys<T> = {
  [K in keyof T as Uppercase<string & K>]: T[K];
};

type ObjectToPropertyDescriptor<T> = {
  [K in keyof T]: PropertyDescriptor;
};

// DeepReadonly
interface Person {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
  };
}

const deepReadonlyPerson: DeepReadonly<Person> = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
  },
};

// DeepRequireReadonly
interface Animal {
  species?: string;
  legs?: number;
}

const deepRequireReadonlyAnimal: DeepRequireReadonly<Animal> = {
  species: "Dog",
  legs: 4,
};

// UpperCaseKeys
const originalObject = {
  name: "John",
  age: 30,
};

const upperCaseKeysObject: UpperCaseKeys<typeof originalObject> = {
  NAME: "John",
  AGE: 30,
};

// ObjectToPropertyDescriptor
const ordinaryObject = {
  value: "Hello",
};

const propertyDescriptorObject: ObjectToPropertyDescriptor<
  typeof ordinaryObject
> = {
  value: {
    value: "Hello",
    writable: true,
    enumerable: true,
    configurable: true,
  },
};
