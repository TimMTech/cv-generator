import PersonalSection from "./CVForm/Personal";
import ExperienceSection from "./CVForm/Experience";
import EducationSection from "./CVForm/Education";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import CvPreview from "./CVPreview/CvPreview";


const Main = () => {
  const [inputPersonalValue, setInputPersonalValue] = useState({
    personalForm: {
      id: uuidv4(),
      firstName: "",
      lastName: "",
      jobTitle: "",
      photo: " ",
      address: "",
      phone: "",
      email: "",
      description: "",
    },
  });

  const [inputExperienceValue, setInputExperienceValue] = useState({
    experienceForm: {
        id: uuidv4(),
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
      },
  });

  const [inputEducationValue, setInputEducationValue] = useState({
    educationForm: {
      id: uuidv4(),
      university: "",
      universityCity: "",
      degree: "",
      subject: "",
      started: "",
      graduated: "",
    },
  });


  return (
    <div className="hero">
      <PersonalSection
        inputValue={inputPersonalValue}
        setInputValue={setInputPersonalValue}
      />
      <ExperienceSection
        inputValue={inputExperienceValue}
        setInputValue={setInputExperienceValue}
      />
      <EducationSection
        inputValue={inputEducationValue}
        setInputValue={setInputEducationValue}
      />
      <CvPreview
        photo={inputPersonalValue.personalForm.photo}
        firstName={inputPersonalValue.personalForm.firstName}
        lastName={inputPersonalValue.personalForm.lastName}
        jobTitle={inputPersonalValue.personalForm.jobTitle}
        address={inputPersonalValue.personalForm.address}
        phone={inputPersonalValue.personalForm.phone}
        email={inputPersonalValue.personalForm.email}
        description={inputPersonalValue.personalForm.description}
        position={inputExperienceValue.experienceForm.position}
        company={inputExperienceValue.experienceForm.company}
        city={inputExperienceValue.experienceForm.city}
        from={inputExperienceValue.experienceForm.from}
        to={inputExperienceValue.experienceForm.to}
        university={inputEducationValue.educationForm.university}
        universityCity={inputEducationValue.educationForm.universityCity}
        degree={inputEducationValue.educationForm.degree}
        subject={inputEducationValue.educationForm.subject}
        started={inputEducationValue.educationForm.started}
        graduated={inputEducationValue.educationForm.graduated}
      />
    </div>
  );
};

export default Main;
