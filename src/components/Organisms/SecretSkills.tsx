import React from "react";
import { useSheetContext } from "../../hooks/SheetProvider";
import SelectorInput from "../Molecules/SelectorInput";
import { uncommonSkills } from "../../assets/lists";
import { unlikelySkills } from "../../assets/lists";
import { unhealthySkills } from "../../assets/lists";

const SecretSkills: React.FC = () => {
  const { sheetData, updateBackSideInfo } = useSheetContext();

  return (
    <>
      <div className="flex mt-2">
        <SelectorInput
          id="uncommonSkill"
          className="w-[70%] box-border pr-3"
          label="秘密技能(非日常)"
          value={
            sheetData.backSideInfo ? sheetData.backSideInfo.uncommonSkill : ""
          }
          options={uncommonSkills.map((value) => ({
            display: value,
            value: value,
          }))}
          onChange={(value) => updateBackSideInfo("uncommonSkill", value)}
        />
        <div className="flex w-[30%]">
          <SelectorInput
            id="uncommonSkillValue"
            className="box-border"
            style={{ width: "calc(100% - 46px)" }}
            label="技能値"
            value={
              sheetData.backSideInfo
                ? sheetData.backSideInfo.uncommonSkillValue
                : ""
            }
            options={Array.from({ length: 21 }, (_, i) => i).map((value) => ({
              display: value === 0 ? "" : String(value),
              value: value === 0 ? "" : String(value),
            }))}
            onChange={(value) =>
              updateBackSideInfo("uncommonSkillValue", value)
            }
          />
          <button
            className="w-[38px] rounded border bg-white mt-2 ml-2"
            onClick={() => {
              updateBackSideInfo(
                "uncommonSkillValue",
                String(Math.floor(Math.random() * 20) + 1)
              );
            }}
          >
            <img src="images/dice.jpg" alt="dice-image" />
          </button>
        </div>
      </div>
      <div className="flex mt-2">
        <SelectorInput
          id="unlikelySkill"
          className="w-[70%] box-border pr-3"
          label="秘密技能(不要)"
          value={
            sheetData.backSideInfo ? sheetData.backSideInfo.unlikelySkill : ""
          }
          options={unlikelySkills.map((value) => ({
            display: value,
            value: value,
          }))}
          onChange={(value) => updateBackSideInfo("unlikelySkill", value)}
        />
        <div className="flex w-[30%]">
          <SelectorInput
            id="unlikelySkillValue"
            className="box-border"
            style={{ width: "calc(100% - 46px)" }}
            label="技能値"
            value={
              sheetData.backSideInfo
                ? sheetData.backSideInfo.unlikelySkillValue
                : ""
            }
            options={Array.from({ length: 21 }, (_, i) => i).map((value) => ({
              display: value === 0 ? "" : String(value),
              value: value === 0 ? "" : String(value),
            }))}
            onChange={(value) =>
              updateBackSideInfo("unlikelySkillValue", value)
            }
          />
          <button
            className="w-[38px] rounded border bg-white mt-2 ml-2"
            onClick={() => {
              updateBackSideInfo(
                "unlikelySkillValue",
                String(Math.floor(Math.random() * 20) + 1)
              );
            }}
          >
            <img src="images/dice.jpg" alt="dice-image" />
          </button>
        </div>
      </div>
      <div className="flex mt-2">
        <SelectorInput
          id="unhealthySkill"
          className="w-[70%] box-border pr-3"
          label="秘密技能(不健全)"
          value={
            sheetData.backSideInfo ? sheetData.backSideInfo.unhealthySkill : ""
          }
          options={unhealthySkills.map((value) => ({
            display: value,
            value: value,
          }))}
          onChange={(value) => updateBackSideInfo("unhealthySkill", value)}
        />
        <div className="flex w-[30%]">
          <SelectorInput
            id="unhealthySkillValue"
            className="box-border"
            style={{ width: "calc(100% - 46px)" }}
            label="技能値"
            value={
              sheetData.backSideInfo
                ? sheetData.backSideInfo.unhealthySkillValue
                : ""
            }
            options={Array.from({ length: 21 }, (_, i) => i).map((value) => ({
              display: value === 0 ? "" : String(value),
              value: value === 0 ? "" : String(value),
            }))}
            onChange={(value) =>
              updateBackSideInfo("unhealthySkillValue", value)
            }
          />
          <button
            className="w-[38px] rounded border bg-white mt-2 ml-2"
            onClick={() => {
              updateBackSideInfo(
                "unhealthySkillValue",
                String(Math.floor(Math.random() * 20) + 1)
              );
            }}
          >
            <img src="images/dice.jpg" alt="dice-image" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SecretSkills;
