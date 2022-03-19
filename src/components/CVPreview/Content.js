import ExperienceItem from "./ExperienceItem";
import EducationItem from "./EducationItem";

const Content = ({personalDescription, experience, education }) => {
  const expItems = experience.map((expItem) => (
    <ExperienceItem key={expItem.id} experienceInfo={expItem} />
  ));

  const eduItems = education.map((eduItem) => (
    <EducationItem key={eduItem.id} educationInfo={eduItem} />
    
  ));

  return (
    <div className="left-panel">
      <h1>Description</h1>
      <div className="description">{personalDescription.description}</div>
      <h1>Experience</h1>
      <div>{expItems}</div>
      <h1>Education</h1>
      <div>{eduItems}</div>
    </div>
  );
};

export default Content;
