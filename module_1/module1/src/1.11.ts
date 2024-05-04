{
  // ternary operator --> question mark logic hisebe use kori and kono decition make kori

  // optional chaining --> kno object a value ase ki na tik mto dkte cai and jate application crash na kore

  // nullish coalescing operator -->

  // ternary operator

  const age: number = 18;

  const isAdult = age >= 18 ? "Adult" : "Not Adult";
  console.log({ isAdult });

  // nullish coalescing operator -->  null / undefine er opr base kore kono decision make korbo and null / undefine hole default set korbo

  const isAuthenticated = null;

  const result1 = isAuthenticated ?? "Guest";
  console.log({ result1 });

  // optional chaining

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Nabila",
    address: {
      city: "Rangpur",
      road: "Shathibari Road",
      presentAddress: "Netrokona",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No permanent address";
  console.log({ permanentAddress });
}
