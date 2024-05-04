{
  // type alias

  // for object

  type Student = {
    name: string;
    age: number;
    contactNo?: string;
    gender: string;
    address: string;
  };

  const std1: Student = {
    name: "Mir",
    age: 40,
    gender: "male",
    address: "dhaka",
  };

  const std2: Student = {
    name: "Mir",
    age: 40,
    gender: "male",
    address: "dhaka",
  };

  // for string

  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = "Persian";
  const isAdmin: IsAdmin = true;

  // for function

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
}
