import React from "react";

// style
import styles from "./../../styles/Skill.module.scss";
import { themeColors } from "../../styles/styles";

// costum-hooks
import { useSheetContext } from "../../hooks/SheetProvider";

// util
import { decideBasicStatus } from "../../util/dice";

// assets
import { skills } from "../../assets/lists";

// modules
import classNames from "classnames";

type PROPS = {
  index: number;
  name: string;
  category: "action" | "knowledge";
};

const SkillCard: React.FC<PROPS> = (props) => {
  const { sheetData, updateStatus, updateCompetencies } = useSheetContext();

  const array = Array.from({ length: 7 }, (_, i) => i + 4);
  const status = sheetData.status[props.category][props.index];
  const competencyMap = [status, status + 4, 1, status + 6];

  const rollDice = () => {
    const newStatus = decideBasicStatus();
    updateStatus(props.category, props.index, newStatus);
  };

  return (
    <div className={styles.card}>
      <div className="flex items-center justify-between p-[5px] bg-[#e3e3e3]">
        <p className="glitch-4 text-base">{props.name}</p>
        <div className="flex">
          <button
            className="flex items-center justify-center w-[35px] rounded border bg-white"
            onClick={rollDice}
          >
            <img src="images/dice.jpg" alt="dice-image" />
          </button>
          <select
            className="w-[50px] ml-[5px]"
            value={sheetData.status[props.category][props.index]}
            onChange={(e) =>
              updateStatus(props.category, props.index, Number(e.target.value))
            }
          >
            <option value={0}></option>
            {array.map((element, index) => (
              <option key={index} value={element}>
                {element}
              </option>
            ))}
          </select>
        </div>
      </div>
      {skills[props.category][props.index].map((name, indexOfSkill) => (
        <div
          key={indexOfSkill}
          className={classNames(
            "flex justify-between h-[30px] ml-[5px] mr-[5px]",
            {
              "border-t": indexOfSkill !== 0,
            }
          )}
        >
          <p className="font-semibold">{name}</p>
          <div className="flex items-center w-[90px]">
            {name !== "" && (
              <>
                <div className="flex justify-between w-[50%]">
                  {Array(3)
                    .fill(null)
                    .map((xxx, competency) => (
                      <input
                        key={competency + 1}
                        type="checkbox"
                        checked={
                          competency + 1 ===
                          sheetData.competencies[props.category][props.index][
                            indexOfSkill
                          ]
                        }
                        onChange={() =>
                          updateCompetencies(
                            props.category,
                            props.index,
                            indexOfSkill,
                            competency + 1
                          )
                        }
                      />
                    ))}
                </div>
                <p className="w-[50%] h-[85%] ml-[5px] flex items-center justify-center text-center bg-white rounded">
                  {
                    competencyMap[
                      sheetData.competencies[props.category][props.index][
                        indexOfSkill
                      ]
                    ]
                  }
                </p>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCard;
