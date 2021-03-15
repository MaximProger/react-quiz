import React from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
import "./Drawer.css";
import { NavLink } from "react-router-dom";

class Drawer extends React.Component {
  renderLinks(links) {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName="active"
            onClick={this.props.onClose}
          >
            {link.label}
          </NavLink>
        </li>
      );
    });
  }

  render() {
    const cls = ["Drawer"];

    if (!this.props.isOpen) {
      cls.push("close");
    }

    const links = [
      {
        to: "/",
        label: "Список",
        exact: true,
      },
    ];

    if (this.props.isAuth) {
      links.push({
        to: "/quiz-creator",
        label: "Создать тест",
        exact: false,
      });

      links.push({
        to: "/logout",
        label: "Выйти",
        exact: false,
      });
    } else {
      links.push({
        to: "/auth",
        label: "Авторизация",
        exact: false,
      });
    }

    return (
      <React.Fragment>
        <nav className={cls.join(" ")}>
          <ul>{this.renderLinks(links)}</ul>
        </nav>

        {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </React.Fragment>
    );
  }
}

export default Drawer;
