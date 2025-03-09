import React from "react";

// style
import styles from "./../../styles/SideMenu.module.scss";

// modules
import classNames from "classnames";

// util
import { themeColors } from "../../styles/styles";

type PROPS = {
  isOpeningMenu: boolean;
};

const SideMenu: React.FC<PROPS> = (props) => {
  return (
    <div
      className={classNames(styles.sideMenu, {
        "translate-x-0": props.isOpeningMenu,
        "translate-x-full": !props.isOpeningMenu,
      })}
      style={{ backgroundColor: themeColors.cover }}
    ></div>
  );
};

export default SideMenu;
