import Button from "../Utils/Button";

const ExperienceSection = ({ id, inputValue, handleExperienceChange }) => {
  
  return (
    <main className="experience-container">
      <h2>Experience Information</h2>
      <section className="form-container">
        <form className="form">
          <input
            name="position"
            className="value-control"
            type="text"
            value={inputValue.position}
            onChange={(e) => handleExperienceChange(e, id)}
            placeholder="Position"
          />

          <input
            name="company"
            className="value-control"
            type="text"
            value={inputValue.company}
            onChange={(e) => handleExperienceChange(e, id)}
            placeholder="Company"
          />
          <input
            name="city"
            className="value-control"
            type="text"
            value={inputValue.city}
            onChange={(e) => handleExperienceChange(e, id)}
            placeholder="City"
          />
          <input
            name="from"
            className="value-control"
            type="text"
            value={inputValue.from}
            onChange={(e) => handleExperienceChange(e, id)}
            placeholder="From"
          />
          <input
            name="to"
            className="value-control"
            type="text"
            value={inputValue.to}
            onChange={(e) => handleExperienceChange(e, id)}
            placeholder="To"
          />
        </form>
      </section>
    </main>
  );
};

export default ExperienceSection;
