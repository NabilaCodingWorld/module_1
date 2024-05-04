// destructuring

// object destructuring
{
  const user = {
    id: 345,
    name: {
      firstName: "Raha",
      middleName: "Musfiq",
      lastName: "Nabila",
    },
    contactNo: "01753985891",
    address: "Rangpur",
  };

  const {
    contactNo,
    name: { middleName: midName },
  } = user; //destructure
}

// Array destructuring

const myFriends = ["Chandler", "Joey", "Ross", "Rachel", "Monika", "Phoebe"];
const [, , bestFriend, ...rest] = myFriends;
