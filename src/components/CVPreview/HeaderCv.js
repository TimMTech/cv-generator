const HeaderCv = ({headerInfo}) => {
    return (
      <div className="header">
        <h1>
          {headerInfo.firstName} {headerInfo.lastName}
        </h1>
        <p>{headerInfo.jobTitle}</p>
      </div>
    );
}

export default HeaderCv