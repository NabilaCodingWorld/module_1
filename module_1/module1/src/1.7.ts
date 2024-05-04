// spread operator

const bros1: string[] = ["Mir", "Firoz", "Mizan"];
const bros2: string[] = ["Tanmoy", "Nahid", "Rahat"];

bros1.push(...bros2);

// spread operator for object

const mentors1 = {
  typeScript: "Mezba",
  redux: "Mir",
  dbms: "Mizan",
};

const mentors2 = {
  prisma: "Firoz",
  next: "Tanmoy",
  cloud: "Nahid",
};

const mentorList = {
  ...mentors1,
  ...mentors2,
};

// rest operator

const greetFriends = (...friends: string[]) => {
  friends.forEach((friend: string) => console.log(`Hi ${friend}`));
};

greetFriends("Abul", "Kabul", "Nabul", "Babul");
