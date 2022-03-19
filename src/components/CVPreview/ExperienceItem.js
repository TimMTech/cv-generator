const ExperienceItem = ({ experienceInfo }) => {
  return (
    <div className="experience">
      <div className="worked">
        <p>
          <span> {experienceInfo.from} </span> -{" "}
          <span> {experienceInfo.to} </span>
        </p>
      </div>

      <div className="worked-at">
        <div>
          <p>{experienceInfo.position}</p>
          <p>{experienceInfo.company}</p>
          <p>{experienceInfo.city}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
