{
  // type assertion --> ami developer hisebe typescript tke better type jodi declare korte pari tahole sta type assertion

  let anyThing: any;
  anyThing = "Next Level web Development";

  (anyThing as string).charAt; //string er sb extension gula cole asbe

  // <-------Function------->

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is : ${convertedValue}`;
    }

    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(1000) as number;
  const result2 = kgToGm("1000") as string;

  // try catch block

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }
}
