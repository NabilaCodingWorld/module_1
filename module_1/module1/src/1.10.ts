{
  // union type
  // type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper"; //string literal type

  // type FullstackDeveloper = "frontendDeveloper" | "fullstackDeveloper";

  // type Developer = FrontendDeveloper | FullstackDeveloper;

  // const newDeveloper: FrontendDeveloper = "fakibazDeveloper";

  // <----------------->

  // type User = {
  //   name: string;
  //   email?: string;
  //   gender: "male" | "female";
  //   bloodGroup: "O+" | "A+" | "AB+";
  // };

  // const user1: User = {
  //   name: "Persian",
  //   gender: "male",
  //   bloodGroup: "O+",
  // };

  // Intersection type

  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullstackDeveloper: FullstackDeveloper = {
    skills: ["HTML", "CSS", "EXPRESS"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
