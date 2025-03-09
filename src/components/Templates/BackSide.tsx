import React, { useState } from "react";
import { useSheetContext } from "../../hooks/SheetProvider";

// styles
import { themeColors } from "../../styles/styles";

// components
import SelectorInput from "../Molecules/SelectorInput";
import NumberInput from "../Molecules/NumberInput";

// assets
import { mutantPowers, secretSocieties } from "../../assets/lists";

// util
import { decideMutantPower } from "../../util/dice";
import SecretSkills from "../Organisms/SecretSkills";

const BackSide: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { sheetData, updateBackSideInfo } = useSheetContext();

  const flatMutantPowers = [...new Set(mutantPowers.flat())];

  const toggleOpeningBackSide = () => {
    if (sheetData.backSideInfo) {
      setIsOpen((prev) => !prev);
    } else {
      alert("閲覧権がありません");
    }
  };

  return (
    <div className="px-[5%] my-4">
      <button
        onClick={toggleOpeningBackSide}
        className="w-full py-1 text-white font-semibold rounded-md"
        style={{
          backgroundColor: themeColors.cover,
        }}
      >
        {!isOpen ? "▼裏面を表示" : "▲裏面を非表示"}
      </button>
      {isOpen && (
        <div>
          <div className="flex mt-2">
            <SelectorInput
              id="mutantPower"
              className="box-border"
              style={{ width: "calc(100% - 46px)" }}
              label="ミュタントパワー"
              value={
                sheetData.backSideInfo ? sheetData.backSideInfo.mutantPower : ""
              }
              options={flatMutantPowers.map((value) => ({
                display: value,
                value: value,
              }))}
              onChange={(value) => updateBackSideInfo("mutantPower", value)}
            />
            <button
              className="w-[38px] rounded border bg-white mt-2 ml-2"
              onClick={() =>
                updateBackSideInfo("mutantPower", decideMutantPower())
              }
            >
              <img src="images/dice.jpg" alt="dice-image" />
            </button>
          </div>
          <div className="flex mt-2">
            <div className="flex w-[70%] pr-3">
              <SelectorInput
                id="secretSociety"
                className="w-full box-border"
                style={{ width: "calc(100% - 46px)" }}
                label="秘密結社"
                value={
                  sheetData.backSideInfo
                    ? sheetData.backSideInfo.secretSociety
                    : ""
                }
                options={secretSocieties.map((value) => ({
                  display: value,
                  value: value,
                }))}
                onChange={(value) => updateBackSideInfo("secretSociety", value)}
              />
              <button
                className="w-[38px] rounded border bg-white mt-2 ml-2"
                onClick={() => {
                  alert("秘密結社の決め方知らんねん");
                }}
              >
                <img src="images/dice.jpg" alt="dice-image" />
              </button>
            </div>
            <div className="flex w-[30%]">
              <SelectorInput
                id="rank"
                className="box-border"
                style={{ width: "calc(100% - 46px)" }}
                label="階級"
                value={
                  sheetData.backSideInfo ? sheetData.backSideInfo.rank : ""
                }
                options={["", "1", "2", "3", "4", "5"].map((value) => ({
                  display: value,
                  value: value,
                }))}
                onChange={(value) => updateBackSideInfo("rank", value)}
              />
              <button
                className="w-[38px] rounded border bg-white mt-2 ml-2"
                onClick={() => {
                  updateBackSideInfo(
                    "rank",
                    String(Math.floor(Math.random() * 5) + 1)
                  );
                }}
              >
                <img src="images/dice.jpg" alt="dice-image" />
              </button>
            </div>
          </div>
          <SecretSkills />
        </div>
      )}
    </div>
  );
};

export default BackSide;
