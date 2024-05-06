{
  // conditional type --> typeScript er kno ekta type onno kno type er opr depend take kno condition er opr depend kore

  type a1 = null;
  type b1 = undefined;

  type x = a1 extends null ? true : false; //x conditional type

  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  // 2nd example

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
  };

  // keyof Sheikh 'bike' | 'car' | 'ship'

  // car ase kina | bike ase kina | ship ase kina | tractor ase kina

  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type HasTracktor = CheckVehicle<"tractor">;
}
