{
  // function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  // const resGeneric = createArrayWithGeneric<boolean>(true);
  const resGeneric = createArrayWithGeneric<string>("Nabila");

  // for object

  type Response = {
    id: number;
    name: string;
  };

  const resGenericObj = createArrayWithGeneric<Response>({
    id: 100,
    name: "Nabila",
  });

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res10 = createArrayWithTuple<string, number>("Bangladesh", 100);

  const res11 = createArrayWithTuple<string, { name: string }>("Nabila", {
    name: "Hamim",
  });

  // <------------------------------------------------------>

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "Mr. X",
    email: "x@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    name: "Mr. X",
    email: "x@gmail.com",
    hasWatch: "Apple Watch",
  });
}
