import React from "react";
import { connect } from "dva";
import { Breadcrumb } from "antd";
import "./index.scss";

class ContentLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  componentDidMount() {
    console.log("process.env", process.env)
  }

  handleClickBread = (currnt) => {
    const { dispatch } = this.props
    dispatch({
      type: "homePage/save",
      payload: {
        iframeRouter: currnt.path
      }
    })
    dispatch({
      type: "homePage/changeBreadData",
      payload: {
          ...currnt
      }
  })
  };

  render() {
    const { breadData, iframeRouter } = this.props.homePage;
    console.log("homePage", this.props.homePage)
    return (
      <div className="page-content-right">
        {breadData && breadData.length > 0 && (
          <div className="page-content-right-bread">
            <Breadcrumb>
              {(breadData || []).map((item, index) => {
                return (
                  <Breadcrumb.Item
                    key={item.id}
                    onClick={() => this.handleClickBread(item)}
                  >
                    {item.title}
                  </Breadcrumb.Item>
                );
              })}
            </Breadcrumb>
          </div>
        )}
        <iframe
          id="iframe-page"
          ref="iframe-page"
          title="百度s"
          src={`http://localhost:8080${iframeRouter}`}
          frameBorder="0"
          width="100%"
          height="100%"
          />
      </div>
    );
  }
}

export default connect(({ homePage }) => ({
  homePage,
}))(ContentLeft);
