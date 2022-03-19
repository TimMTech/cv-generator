const EducationSection = ({ id, inputValue, handleEducationChange }) => {
  
  return (
    <main className="education-container">
      <h2>Education Information</h2>
      <section className="form-container">
        <form className="form">
          <input
            name="university"
            className="value-control"
            type="text"
            value={inputValue.university}
            onChange={(e) => handleEducationChange(e, id)}
            placeholder="University"
          />
          <input
            name="universityCity"
            className="value-control"
            type="text"
            value={inputValue.universityCity}
            onChange={(e) => handleEducationChange(e, id)}
            placeholder="City"
          />
          <input
            name="degree"
            className="value-control"
            type="text"
            value={inputValue.degree}
            onChange={(e) => handleEducationChange(e, id)}
            placeholder="Degree"
          />
          <input
            name="subject"
            className="value-control"
            type="text"
            value={inputValue.subject}
            onChange={(e) => handleEducationChange(e, id)}
            placeholder="Subject"
          />
          <input
            name="started"
            className="value-control"
            type="text"
            value={inputValue.started}
            onChange={(e) => handleEducationChange(e, id)}
            placeholder="Started"
          />
          <input
            name="graduated"
            className="value-control"
            type="text"
            value={inputValue.graduated}
            onChange={(e) => handleEducationChange(e, id)}
            placeholder="Graduation"
          />
        </form>
      </section>
    </main>
  );
};

export default EducationSection;
