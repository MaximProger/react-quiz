import React from "react";
import { connect } from "react-redux";
import Drawer from "../../components/Navigation/Drawer/Drawer";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import "./Layout.css";

class Layout extends React.Component {
  state = {
    menu: false,
  };

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };

  menuCloseHandler = () => {
    this.setState({
      menu: false,
    });
  };

  render() {
    return (
      <div className="Layout">
        <Drawer
          isOpen={this.state.menu}
          onClose={this.menuCloseHandler}
          isAuth={this.props.isAuth}
        />

        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />

        <main>{this.props.children}</main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuth: !!state.auth.token,
  };
}

export default connect(mapStateToProps)(Layout);
