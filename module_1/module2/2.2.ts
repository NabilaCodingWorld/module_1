// interface

// type alias

type User1 = {
  name: string;
  age: number;
};

const user1: User1 = {
  name: "Nabila",
  age: 26,
};
//

// interface

interface User2 {
  name: string;
  age: number;
}

const user2: User2 = {
  name: "Nabila",
  age: 26,
};

// difference between type alias and interface.. type alias amra caile premitive type a o use korte pari, interface e premitive type declare korte parbo na,

// sb primitive  e type alias use korte parbo.

// and object e type alias and interface 2ta e use korte parbo

type User3 = {
  name: string;
  age: number;
};

type UserWithRoll1 = User3 & { role: string }; // type alias with intersection

interface UserWithRoll2 extends User3 {
  role: string;
}

// const user3 : UserWithRoll1 = {
//   name: 'Nabila',
//   age: 26,
//   role: 'House Wife'
// }   alias

const user3: UserWithRoll2 = {
  //interface
  name: "Nabila",
  age: 26,
  role: "House Wife",
};

// object e type alias and interface 2 ta e use korte pari

// array declare using interface

// js -> object o object; array o object; function o object

type Roll1 = number[];

interface Roll2 {
  [index: number]: number;
}

const rollNumber1: Roll1 = [1, 2, 3];
//  0, 1,  2 --> number type

// for function

type Add1 = (num1: number, num2: number) => number; //alias

interface Add2 {
  (num1: number, num2: number): number;
} //interface

const add_add: Add1 = (num1, num2) => num1 + num2;

// NB: type alias code clean rakhe
