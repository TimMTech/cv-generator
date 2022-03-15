const CvPreview = ({
  firstName,
  lastName,
  jobTitle,
  photo,
  address,
  phone,
  email,
  description,
  position,
  company,
  city,
  from,
  to,
  university,
  universityCity,
  degree,
  subject,
  started,
  graduated,
}) => {
  return (
    <div className="value-container">
      <section className="cv-header">
        <h1>
          <span>{firstName}</span> <span>{lastName}</span>
        </h1>
        <h3>{jobTitle}</h3>
      </section>
      <section className="cv-main">
        <div className="cv-left-panel">
          <h1>Description</h1>
          <div className="cv-description">
            <p>{description}</p>
          </div>
          <h1>Experience</h1>
          <div className="cv-work-experience">
            <div className="cv-worked">
              <p>
                <span> {from} </span> - <span> {to} </span>
              </p>
            </div>
            <div className="cv-worked-at">
              <p>{position}</p>
              <p>{company}</p>
              <p>{city}</p>
            </div>
          </div>
          <h1>Education</h1>
          <div className="cv-education">
            <div className="cv-studied">
              <p>
                <span> {started} </span> - <span> {graduated} </span>
              </p>
            </div>
            <div className="cv-studied-at">
              <p>{university}</p>
              <p>{universityCity}</p>
              <p>{degree}</p>
              <p>{subject}</p>
            </div>
          </div>
        </div>
        <div className="cv-right-panel">
          <img className="cv-photo" src={photo} alt="" />
          <div className="cv-personal-details">
            <h1>Personal Details</h1>
            <h2>Address</h2>
            <p>{address}</p>
            <h2>Phone</h2>
            <p>{phone}</p>
            <h2>Email</h2>
            <p>{email}</p>
          </div>
        </div>
      </section>
    </div>
  );
};


