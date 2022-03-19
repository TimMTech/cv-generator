const PersonalSection = ({ inputValue, handlePersonalChange }) => {
  return (
    <main className="personal-container">
      <h2>Personal Information</h2>
      <section className="form-container">
        <form className="form">
          <input
            name="firstName"
            type="text"
            value={inputValue.firstName}
            onChange={(e) => handlePersonalChange(e)}
            placeholder="First Name"
          />
          <input
            name="lastName"
            type="text"
            value={inputValue.lastName}
            onChange={(e) => handlePersonalChange(e)}
            placeholder="Last Name"
          />
          <input
            name="jobTitle"
            type="text"
            value={inputValue.jobTitle}
            onChange={(e) => handlePersonalChange(e)}
            placeholder="Job Title"
          />
          <p>Choose Profile Image</p>
          <input
            name="photo"
            type="file"
            className="photo-upload"
            multiple="image/*"
            onChange={(e) => handlePersonalChange(e)}
            placeholder="Photo"
          />
          <input
            name="address"
            type="text"
            value={inputValue.address}
            onChange={(e) => handlePersonalChange(e)}
            placeholder="Address"
          />
          <input
            name="phone"
            type="text"
            value={inputValue.phone}
            onChange={(e) => handlePersonalChange(e)}
            placeholder="Phone Number"
          />
          <input
            name="email"
            type="text"
            value={inputValue.email}
            onChange={(e) => handlePersonalChange(e)}
            placeholder="Email Address"
          />
          <input
            name="description"
            type="text"
            value={inputValue.description}
            onChange={(e) => handlePersonalChange(e)}
            placeholder="Description"
          />
        </form>
      </section>
    </main>
  );
};

export default PersonalSection;
