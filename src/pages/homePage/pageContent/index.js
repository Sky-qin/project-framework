import React from "react";
import ContentLeft from "./contenLeft/index";
import ContentRight from "./contenRight/index";

import "./index.scss";

class PageContent extends React.Component {
  render() {
    return (
      <div className="page-content">
        <ContentLeft />
        <ContentRight/>
      </div>
    );
  }
}

export default PageContent;
