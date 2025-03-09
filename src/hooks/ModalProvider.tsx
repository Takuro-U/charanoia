import React, { createContext, useContext, useState } from "react";

type PROPS = {
  children: React.ReactNode;
};

interface ModalStatus {
  isOpen: boolean;
  text: string | undefined;
  coreFunction: ((...args: any[]) => void) | undefined;
  Component: React.ComponentType<any> | null | undefined;
  componentProps: any | undefined;
}

const defaultModalStatus: ModalStatus = {
  isOpen: false,
  text: "",
  coreFunction: () => {},
  Component: null,
  componentProps: null,
};

const defaultContext = {
  modalStatus: defaultModalStatus,
  openModal: (p: {
    text: string;
    coreFunction: (...args: any[]) => any;
    Component: React.ComponentType<any>;
    componentProps: any;
  }) => {},
  closeModal: () => {},
};

const ModalContext = createContext(defaultContext);

export const useModalContext = () => {
  return useContext(ModalContext);
};

const ModalProvider: React.FC<PROPS> = ({ children }) => {
  const [modalStatus, setModalStatus] = useState(defaultModalStatus);

  const openModal = (p: {
    text?: string;
    coreFunction?: (...args: any[]) => any;
    Component?: React.ComponentType<any>;
    componentProps?: any;
  }) => {
    setModalStatus({
      isOpen: true,
      text: p.text,
      coreFunction: p.coreFunction,
      Component: p.Component,
      componentProps: p.componentProps,
    });
  };

  const closeModal = () => {
    setModalStatus(defaultModalStatus);
  };

  return (
    <ModalContext.Provider value={{ modalStatus, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
