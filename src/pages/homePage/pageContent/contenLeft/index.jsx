import React from "react";
import { connect } from "dva";
import { Menu } from "antd";

import "./index.scss";

const { SubMenu } = Menu;

class ContentLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  /**
   *
   * @param {*} list
   */
  randerMenuNode = (list) => {
    if (!list || list.length === 0) return;
    return list.map((node) => {
      const { children } = node;
      if (children && children.length > 0) {
        return (
          <SubMenu key={node.key} currentnode={node} title={node.title || ""}>
            {this.randerMenuNode(children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={node.key} currentnode={node}>
          {node.title || ""}
        </Menu.Item>
      );
    });
  };

  selectMenu = ({ item }) => {
    const { dispatch } = this.props;
    console.log("item", item)
    const { currentnode } = item.props
    var breadData = [];
    breadData = this.getBreadData(item.props, breadData);
    dispatch({
      type: "homePage/save",
      payload: {
        breadData,
        iframeRouter: currentnode.path
      },
    });
  };

  getBreadData = (props, data = []) => {
    const { parentMenu, currentnode } = props;
    if (currentnode) {
      data.unshift({ ...currentnode });
    }
    if (parentMenu.props.parentMenu) {
      this.getBreadData(parentMenu.props, data);
    }
    return data;
  };

  render() {
    const { menuList } = this.props.homePage;
    return (
      <div className="page-content-left">
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
          onSelect={this.selectMenu}
        >
          {this.randerMenuNode(menuList || [])}
        </Menu>
      </div>
    );
  }
}

export default connect(({ homePage }) => ({
  homePage,
}))(ContentLeft);
