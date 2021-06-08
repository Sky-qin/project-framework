import React from 'react';
import { connect } from 'dva';
import "./index.scss"

class TopNavBar extends React.Component {
  state = {
    collapsed: false,
  };

  render() {
    return (
      <div className="top-nav-bar">
        头部
      </div>
    );
  }
}

export default connect()(TopNavBar);
