// Reference type --> Object

const user: {
  company: "PHero"; //type --> literal type
  firstName: string;
  middleName?: string; //optional type
  lastName: string;
} = {
  company: "PHero",
  firstName: "Raha",
  // middleName: "Musfiq",
  lastName: "Nabila",
};

user.company = "PHero";
