import React, { useState } from "react";

// costum-hooks
import ModalProvider from "../hooks/ModalProvider";
import SheetProvider from "../hooks/SheetProvider";

// components
import Header from "../components/common/Header";
import SideMenu from "../components/common/SideMenu";
import Footer from "../components/common/Footer";

type PROPS = {
  children: React.ReactNode;
};

const AppShell: React.FC<PROPS> = ({ children }) => {
  const [isOpeningMenu, setIsOpeningMenu] = useState(false);

  const handleOpenSideMenu = () => {
    setIsOpeningMenu((prev) => !prev);
  };

  return (
    <>
      <ModalProvider>
        <SheetProvider>
          <Header handleOpenSideMenu={handleOpenSideMenu} />
          <SideMenu isOpeningMenu={isOpeningMenu} />
          {children}
          <Footer />
        </SheetProvider>
      </ModalProvider>
    </>
  );
};

export default AppShell;
