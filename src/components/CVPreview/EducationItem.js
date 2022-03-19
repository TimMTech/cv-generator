const EducationItem = ({ educationInfo }) => {
  return (
    <div className="education">
      <div className="studied">
        <p>
          <span> {educationInfo.started} </span> -{" "}
          <span> {educationInfo.graduated} </span>
        </p>
      </div>

      <div className="studied-at">
        <div>
          <p>{educationInfo.university}</p>
          <p>{educationInfo.universityCity}</p>
          <p> Degree : {educationInfo.degree}</p>
          <p> Subject : {educationInfo.subject}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationItem