import React from "react";

//mui-icon
import { Menu } from "@mui/icons-material";

// modules
import classNames from "classnames";

type PROPS = {
  handleOpenSideMenu: () => void;
};

const Header: React.FC<PROPS> = (props) => {
  return (
    <div
      className={classNames(
        "fixed top-0 right-0 z-50",
        "flex justify-between",
        "h-[8vh] w-full",
        "bg-[rgb(12,12,12)]"
      )}
    >
      <img src="/images/header.png" className="h-full w-auto" />
      <div
        className={classNames(
          "flex items-center justify-center",
          "h-full pr-[10px]"
        )}
        onClick={props.handleOpenSideMenu}
      >
        <Menu style={{ width: "4.4vh", height: "55%", color: "white" }} />
      </div>
    </div>
  );
};

export default Header;
