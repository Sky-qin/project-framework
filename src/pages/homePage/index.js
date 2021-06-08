import React from "react";
import { connect } from "dva";
import TopNavBar from "./topNavBar";
import PageContent from "./pageContent";
import { ReceiveMessage } from "../../utils/tools";

import "./index.css";

class HomePage extends React.Component {
  componentDidMount() {
    window.addEventListener("message", (e) => ReceiveMessage(e, this), false);
  }



  render() {
    return (
      <div className="home-page">
        <TopNavBar />
        <PageContent />
      </div>
    );
  }
}

export default connect()(HomePage);
