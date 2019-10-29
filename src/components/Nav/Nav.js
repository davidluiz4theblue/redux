import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
  {
    name: 'TRANG CHỦ',
    to: '/',
    exact: true,
  },
  {
    name: ' QUẢN LÝ SẢN PHẨM',
    to: '/product-list',
    exact: false,
  },
];

const MenuLink = ({ label, to, activeWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeWhenExact}
      children={({ match }) => {
        let active = match ? 'active' : '';
        return (
          <li className="nav-item">
            <Link to={to} className={`nav-link ${active}`}>
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};
class Nav extends Component {
  showMenus = menus => {
    let result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  };
  render() {
    return (
      <React.Fragment>
        <div className="container col-lg-10">
          <ul className="nav nav-pills navbar-expand-lg navbar-light bg-dark">
            {this.showMenus(menus)}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Nav;

// <React.Fragment>
//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <Link to="/" className="navbar-brand" href="#6">
//       LOGO
//     </Link>
//     <button
//       className="navbar-toggler"
//       type="button"
//       data-toggle="collapse"
//       data-target="#navbarNavAltMarkup"
//       aria-controls="navbarNavAltMarkup"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon" />
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//       <div className="navbar-nav">
//         <li class="nav-item">
//           <Link to="/" className="nav-link active">
//             TRANG CHỦ <span className="sr-only">(current)</span>
//           </Link>
//         </li>
//         <li class="nav-item">
//           <Link to="/non" className="nav-link active">
//           QUẢN LÝ SẢN PHẨM
//           </Link>
//         </li>
//       </div>
//     </div>
//   </nav>
// </React.Fragment>
