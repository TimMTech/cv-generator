const EducationSection = ({ inputValue, setInputValue }) => {
  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputValue((prevState) => ({
      educationForm: {
        ...prevState.educationForm,
        [id]: value,
      },
    }));
  };


  return (
    <main className="education-container">
      <h2>Education Information</h2>
      <section className="form-container">
        <form className="form">
          <input
            id="university"
            className="value-control"
            type="text"
            value={inputValue.university}
            onChange={handleChange}
            placeholder="University"
          />
          <input
            id="universityCity"
            className="value-control"
            type="text"
            value={inputValue.universityCity}
            onChange={handleChange}
            placeholder="City"
          />
          <input
            id="degree"
            className="value-control"
            type="text"
            value={inputValue.degree}
            onChange={handleChange}
            placeholder="Degree"
          />
          <input
            id="subject"
            className="value-control"
            type="text"
            value={inputValue.subject}
            onChange={handleChange}
            placeholder="Subject"
          />
          <input
            id="started"
            className="value-control"
            type="text"
            value={inputValue.started}
            onChange={handleChange}
            placeholder="Started"
          />
          <input
            id="graduated"
            className="value-control"
            type="text"
            value={inputValue.graduated}
            onChange={handleChange}
            placeholder="Graduation"
          />
        </form>
      </section>
    </main>
  );
};

export default EducationSection;

