import ExperienceSection from "./CVForm/Experience";
import CvPreview from "./CVPreview/CvPreview";
import { v4 as uuidv4 } from "uuid";
import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import emptyCv from "./Utils/emptyCv";
import exampleCv from "./Utils/exampleCv";
import Button from "./Utils/Button";
import EducationSection from "./CVForm/Education";
import PersonalSection from "./CVForm/Personal";


const Main = () => {
  const [cv, setCv] = useState(emptyCv);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const resetCv = () => {
    setCv(emptyCv);
  };

  const generatePreview = () => {
    if (cv === emptyCv) {
      setCv(exampleCv);
    }
    if (cv === exampleCv) {
      setCv(emptyCv);
    }
  };

  const handlePersonalChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      handleFileChange(e);
      return;
    }

    setCv((prevState) => ({
      ...prevState,
      personalForm: {
        ...prevState.personalForm,
        [name]: value,
      },
    }));
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    if (!file) return;
    setCv((prevState) => ({
      ...prevState,
      personalForm: {
        ...prevState.personalForm,
        [name]: URL.createObjectURL(new Blob([file], { type: "image/*" })),
      },
    }));
  };

  const handleDeleteExperience = (id) => {
    setCv((prevState) => {
      const newExperience = prevState.experienceForm.filter(
        (experienceItem) => experienceItem.id !== id
      );
      if (newExperience.length === 0) {
        return {...prevState}
      }
      return { ...prevState, experienceForm: [...newExperience] };
    });
  };

  const handleAddExperience = () => {
    setCv((prevState) => ({
      ...prevState,
      experienceForm: [
        ...prevState.experienceForm,
        {
          id: uuidv4(),
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
        },
      ],
    }));
  };

  const handleExperienceChange = (e, id) => {
    const { name, value } = e.target;
    setCv((prevState) => {
      const newExperience = prevState.experienceForm.map((experienceItem) => {
        if (experienceItem.id === id) {
          return { ...experienceItem, [name]: value };
        }
        return experienceItem;
      });
      return { ...prevState, experienceForm: [...newExperience] };
    });
  };

  const handleDeleteEducation = (id) => {
    setCv((prevState) => {
      const newEducation = prevState.educationForm.filter(
        (educationItem) => educationItem.id !== id
      );
      if (newEducation.length === 0) {
        return {...prevState}
      }
      return { ...prevState, educationForm: [...newEducation] };
    });
  };

  const handleAddEducation = () => {
    setCv((prevState) => ({
      ...prevState,
      educationForm: [
        ...prevState.educationForm,
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
    }));
  };

  const handleEducationChange = (e, id) => {
    const { name, value } = e.target;
    setCv((prevState) => {
      const newEducation = prevState.educationForm.map((educationItem) => {
        console.log(educationItem);
        if (educationItem.id === id) {
          return { ...educationItem, [name]: value };
        }
        return educationItem;
      });
      return { ...prevState, educationForm: [...newEducation] };
    });
  };

  return (
    <div className="hero">
      <PersonalSection
        id={cv.personalForm.id}
        inputValue={cv.personalForm}
        handlePersonalChange={(e) => handlePersonalChange(e)}
      />

      {cv.experienceForm.map((items) => {
        const { id } = items;
        return (
          <div key={id}>
            <ExperienceSection
              key={id}
              inputValue={cv.experienceForm}
              handleExperienceChange={(e) => handleExperienceChange(e, id)}
            />
            <Button onClick={handleAddExperience} text="Add" className="add"/>
            <Button onClick={() => handleDeleteExperience(id)} text="Delete" className={"btn-delete"}/>
          </div>
        );
      })}

      {cv.educationForm.map((items) => {
        const { id } = items;
        return (
          <div key={id}>
            <EducationSection
              key={id}
              inputValue={cv.educationForm}
              handleEducationChange={(e) => handleEducationChange(e, id)}
            />
            <Button onClick={handleAddEducation} text="Add" />
            <Button onClick={() => handleDeleteEducation(id)} text="Delete" />
          </div>
        );
      })}
      <Button onClick={generatePreview} text="Example" />
      <Button onClick={handlePrint} text="PDF" />
      <Button onClick={resetCv} text="Reset" />
      <CvPreview cv={cv} ref={componentRef} />
    </div>
  );
};

export default Main;
