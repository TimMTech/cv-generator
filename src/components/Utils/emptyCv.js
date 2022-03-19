import {v4 as uuidv4} from "uuid"
 
const emptyCv = {
  personalForm: {

    firstName: "",
    lastName: "",
    jobTitle: "",
    photo: " ",
    address: "",
    phone: "",
    email: "",
    description: "",
  },
  experienceForm: [
    {
      id: uuidv4(),
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    },
  ],
  educationForm: [
    {
      id: uuidv4(),
      university: "",
      universityCity: "",
      degree: "",
      subject: "",
      started: "",
      graduated: "",
    },
  ],
};

export default emptyCv
