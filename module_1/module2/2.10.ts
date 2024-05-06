{
  // mapped type --> map array return kore --> mapped type onk ta map er mto kaj kore

  // map er modde looping variable take

  const arrOfNumbers: number[] = [1, 2, 3];

  const arrOfStrings: string[] = arrOfNumbers.map((number) =>
    number.toString()
  );

  console.log(arrOfStrings);
}

// mapped type

type AreaNumber = {
  height: number;
  width: number;
};

type Height = AreaNumber["height"]; //look up type

type AreaString<T> = {
  [key in keyof T]: T[key];
};

const area1: AreaString<{ height: string; width: number }> = {
  height: "100",
  width: 50,
};
