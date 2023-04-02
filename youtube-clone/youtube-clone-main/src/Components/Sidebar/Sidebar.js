import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../utils/categories";

import classes from "./Sidebar.module.css";
const Sidebar = () => {
  return (
    <div className={classes.sidebar__container}>
      {categories.map((item) => (
        <Link to={`page/${item.name}`}>
          <div className={classes.sidebar__NameIcon} key={item.name}>
            <div className={classes.name}>{item.name}</div>
            <div className={classes.icon}>{item.icon}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default Sidebar;
