{
  // generic --> generalize kore fela.. mane amra amadr proyojon onujaye type create korte pari and reuse korte pari sta e generic type

  type GenericArray<T> = Array<T>;

  // const rollNumbers: number[] = [3, 6, 9];
  const rollNumbers: GenericArray<number> = [3, 6, 9];

  // const mentors: string[] = ['Mr. X', 'Mr. Y', 'Mr. Z'];
  const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  // const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  // Array of Object type using generic

  type User = { name: string; age: number };

  const user: GenericArray<User> = [
    {
      name: "Mezba",
      age: 100,
    },
    {
      name: "Jhankar",
      age: 110,
    },
  ];

  // generic tupple

  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["Mr. X", "Mrs. X"];

  const UserWithID: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "nabila", email: "nabila@gmail.com" },
  ];
}
