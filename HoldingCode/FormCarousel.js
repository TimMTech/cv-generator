import PersonalSection from "./CVForm/Personal";
import ExperienceSection from "./CVForm/Experience";
import EducationSection from "./CVForm/Education";
import CvPreview from "./CVPreview/Complete";
import Button from "./Utils/Button";
import { useState } from "react";

const Main = () => {
  const [inputPersonalValue, setInputPersonalValue] = useState({
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
  });

  const [inputExperienceValue, setInputExperienceValue] = useState({
    experienceForm: {
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    },
  });

  const [inputEducationValue, setInputEducationValue] = useState({
    educationForm: {
      university: "",
      universityCity: "",
      degree: "",
      subject: "",
      started: "",
      graduated: "",
    },
  });

  const [components, setComponents] = useState({
    showPersonal: false,
    showExperience: false,
    showEducation: false,
    showComplete: false,
  });

  const [formComplete, setFormComplete] = useState({
    personal: false,
    experience: false,
    education: false,
  });

  const checkValues = () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      if (input.value === "") {
        input.className = "value-control error";
      } else {
        input.className = "value-control success";
      }
      formSuccess(inputs);
    });
  };

  const formSuccess = (inputs) => {
    const inputArray = [...inputs];
    if (
      inputArray.every((input) => {
        return input.classList.value === "value-control success";
      })
    ) {
      setComponents({ ...components, showExperience: true });
      setFormComplete({ ...formComplete, personal: true });
      switchForm();
    }
  };

  const switchForm = () => {
    if (formComplete.personal === true) {
      setComponents({ ...components, showEducation: true });
      setFormComplete({ ...formComplete, experience: true });
    }
    if (formComplete.experience === true) {
      setTimeout(() => {
        setComponents({ ...components, showComplete: true });
      }, 3000);
    }
  };

  const onButtonClick = () => {
    checkValues();
  };

  return (
    <div className="hero">
      <PersonalSection
        inputValue={inputPersonalValue}
        setInputValue={setInputPersonalValue}
      />
      {components.showExperience ? (
        <ExperienceSection
          inputValue={inputExperienceValue}
          setInputValue={setInputExperienceValue}
        />
      ) : null}
      {components.showEducation ? (
        <EducationSection
          inputValue={inputEducationValue}
          setInputValue={setInputEducationValue}
        />
      ) : null}
      <Button onClick={onButtonClick} />

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
