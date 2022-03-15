const ExperienceSection = ({ inputValue, setInputValue }) => {
  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputValue((prevState) => ({
      experienceForm: {
        ...prevState.experienceForm,
        [id]: value
      }
    }))
  };

  return (
    <main className="experience-container">
      <h2>Experience Information</h2>
      <section className="form-container">
        <form className="form">
          <input
            id="position"
            className="value-control"
            type="text"
            value={inputValue.position}
            onChange={handleChange}
            placeholder="Position"
          />
          <input
            id="company"
            className="value-control"
            type="text"
            value={inputValue.company}
            onChange={handleChange}
            placeholder="Company"
          />
          <input
            id="city"
            className="value-control"
            type="text"
            value={inputValue.city}
            onChange={handleChange}
            placeholder="City"
          />
          <input
            id="from"
            className="value-control"
            type="text"
            value={inputValue.from}
            onChange={handleChange}
            placeholder="From"
          />
          <input
            id="to"
            className="value-control"
            type="text"
            value={inputValue.to}
            onChange={handleChange}
            placeholder="To"
          />
        </form>
      </section>
    </main>
  );
};

export default ExperienceSection;
