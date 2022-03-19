import { v4 as uuidv4 } from "uuid";

const exampleCv = {
  personalForm: {
    firstName: "Jane",
    lastName: "Doe",
    jobTitle: "Senior Engineer",
    photo:
      "https://www.headshotsprague.com/wp-content/uploads/2019/08/Emotional-headshot-of-aspiring-actress-on-white-background-made-by-Headshots-Prague-1.jpg",
    address: "123-45 Example Rd",
    phone: "123-456-7890",
    email: "example@gmail.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  experienceForm: [
    {
      id: uuidv4(),
      position: "Senior Engineer",
      company: "Blizzard Entertainment",
      city: "Irvin, California",
      from: "2014",
      to: "Present",
    },
  ],
  educationForm: [
    {
      id: uuidv4(),
      university: "MIT",
      universityCity: "Boston",
      degree: "Bachelor of Science",
      subject: "Computer Science",
      started: "2010",
      graduated: "2015",
    },
  ],
};

export default exampleCv
