{
  // generic constant with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; //manuyally

  type Owner2 = keyof Vehicle;

  // const person : Owner = 'bike';

  // <-----object------>

  // const user = {
  //   name: 'Mrs. Nabila',
  //   age: 26,
  //   address: 'Rangpur'
  // }

  // user['age'] -----> 26,  ai jinis ta function er moto kore korte cai

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Mrs. Nabila",
    age: 26,
    address: "Rangpur",
  };

  const result = getPropertyValue(user, "name");
}
