const RightPanel = ({rightPanel}) => {
    return (
      <div className="right-panel">
        <img className="photo" src={rightPanel.photo} alt="" />
        <div>
          <h1>Personal Details</h1>
          <h2>Address</h2>
          <p>{rightPanel.address}</p>
          <h2>Phone</h2>
          <p>{rightPanel.phone}</p>
          <h2>Email</h2>
          <p>{rightPanel.email}</p>
        </div>
      </div>
    );
}

export default RightPanel