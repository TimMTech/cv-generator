const PersonalSection = ({ inputValue, setInputValue }) => {
  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(value)
    setInputValue((prevState) => ({
      personalForm: {
        ...prevState.personalForm,
        [id]: value,
      },
    }));
  };

  const handleFile = (e) => {
    const { id, files } = e.target;
    if (!files) return
    setInputValue((prevState) => ({
      personalForm: {
        ...prevState.personalForm,
        [id]: URL.createObjectURL(new Blob([files[0]], {type:"image/*"}))
      }
    }))
  }

  

  return (
    <main className="personal-container">
      <h2>Personal Information</h2>
      <section className="form-container">
        <form className="form">
          <input
            id="firstName"
            className="value-control"
            type="text"
            value={inputValue.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
          <input
            id="lastName"
            className="value-control"
            type="text"
            value={inputValue.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
          <input
            id="jobTitle"
            className="value-control"
            type="text"
            value={inputValue.jobTitle}
            onChange={handleChange}
            placeholder="Job Title"
          />
          <p>Choose Profile Image</p>
          <input
            id="photo"
            type="file"
            className="photo-upload"
            multiple="image/*"
            onChange={handleFile}
            placeholder="Photo"
          />
          <input
            id="address"
            className="value-control"
            type="text"
            value={inputValue.address}
            onChange={handleChange}
            placeholder="Address"
          />
          <input
            id="phone"
            className="value-control"
            type="text"
            value={inputValue.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />
          <input
            id="email"
            className="value-control"
            type="text"
            value={inputValue.email}
            onChange={handleChange}
            placeholder="Email Address"
          />
          <input
            id="description"
            className="description"
            type="text"
            value={inputValue.description}
            onChange={handleChange}
            placeholder="Description"
          />
        </form>
      </section>
    </main>
  );
};

export default PersonalSection;
