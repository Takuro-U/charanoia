import React, { createContext, useContext, useState } from "react";

type PROPS = {
  children: React.ReactNode;
};

const defaultData: SheetData = {
  basicInfo: {
    name: "",
    age: "",
    gender: "",
    clearance: "",
    sector: "",
    cloneNumber: "",
    serviceGroup: "",
    habits: "",
  },
  backSideInfo: {
    mutantPower: "",
    secretSociety: "",
    rank: "",
    uncommonSkill: "",
    uncommonSkillValue: "",
    unlikelySkill: "",
    unlikelySkillValue: "",
    unhealthySkill: "",
    unhealthySkillValue: "",
  },
  status: {
    action: Array(3).fill(0),
    knowledge: Array(3).fill(0),
  },
  competencies: {
    action: Array(3).fill(Array(10).fill(0)),
    knowledge: Array(3).fill(Array(9).fill(0)),
  },
};

const defaultContext = {
  sheetData: defaultData,
  updateBasicInfo: (key: string, newValue: string) => {},
  updateBackSideInfo: (key: string, newValue: string) => {},
  updateStatus: (category: string, index: number, status: number) => {},
  updateCompetencies: (
    category: string,
    index1: number,
    index2: number,
    newConpetency: number
  ) => {},
};

const SheetContext = createContext(defaultContext);

export const useSheetContext = () => {
  return useContext(SheetContext);
};

const SheetProvider: React.FC<PROPS> = ({ children }) => {
  const [sheetData, setSheetData] = useState<SheetData>(defaultData);

  const updateBasicInfo = (key: string, newValue: string) => {
    setSheetData((prev) => ({
      ...prev,
      basicInfo: { ...prev.basicInfo, [key]: newValue },
    }));
  };

  const updateBackSideInfo = (key: string, newValue: string) => {
    setSheetData((prev) => ({
      ...prev,
      backSideInfo: prev.backSideInfo
        ? { ...prev.backSideInfo, [key]: newValue }
        : false,
    }));
  };

  const updateStatus = (category: string, index: number, parameter: number) => {
    setSheetData((prev) => ({
      ...prev,
      status: {
        ...prev.status,
        [category]: prev.status[category].map((status: number, i: number) =>
          i === index ? parameter : status
        ),
      },
    }));
  };

  const updateCompetencies = (
    category: string,
    index1: number,
    index2: number,
    newCompetency: number
  ) => {
    setSheetData((prev) => ({
      ...prev,
      competencies: {
        ...prev.competencies,
        [category]: prev.competencies[category].map(
          (element: number[], i1: number) =>
            i1 === index1
              ? element.map((competency: number, i2: number) =>
                  i2 === index2
                    ? newCompetency ===
                      sheetData.competencies[category][index1][index2]
                      ? 0
                      : newCompetency
                    : competency
                )
              : element
        ),
      },
    }));
  };

  return (
    <SheetContext.Provider
      value={{
        sheetData,
        updateStatus,
        updateCompetencies,
        updateBasicInfo,
        updateBackSideInfo,
      }}
    >
      {children}
    </SheetContext.Provider>
  );
};

export default SheetProvider;
