import HeaderCv from "./HeaderCv";
import Content from "./Content";
import RightPanel from "./RightPanel";
import { Component } from "react";

//Class Component Needed to Print CvPreview//

class CvPreview extends Component {
  render() {
    const { cv } = this.props;
    
    return (
      <div className="main-container">
        <HeaderCv headerInfo={cv.personalForm} />
        <div className="panels">
          <Content
            personalDescription={cv.personalForm}
            experience={cv.experienceForm}
            education={cv.educationForm}
          />
          <RightPanel rightPanel={cv.personalForm} />
        </div>
      </div>
    );
  }
}

export default CvPreview;
