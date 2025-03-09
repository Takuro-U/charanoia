import React from "react";

// components
import Profile from "./Templates/Profile";
import BackSide from "./Templates/BackSide";
import Skills from "./Templates/Skills";

// styles
import { themeColors } from "../styles/styles";

const Main: React.FC = () => {
  return (
    <div
      className="my-[8vh]"
      style={{ backgroundColor: themeColors.background }}
    >
      <Profile />
      <BackSide />
      <Skills />
    </div>
  );
};

export default Main;
