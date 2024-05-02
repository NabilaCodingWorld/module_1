// Learning function

// Normal Function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(2, 4);

// Arrow Function

const addArrow = (num1: number, num2: number): number => num1 + num2;

// a function in an object is called method, object --> function --> method

const poorUser = {
  name: "Nabila",
  balance: 0,
  addBalance(balance: number): string {
    return `My new Balance is : ${this.balance + balance}`;
  },
};

// map over array, NB: map returns a new array

const arr: number[] = [1, 4, 10];
const newArray: number[] = arr.map((elem: number): number => elem * elem);
