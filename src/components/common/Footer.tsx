import React, { useState } from "react";
import styles from "../../styles/Footer.module.scss";
import { rollDice } from "../../util/dice";
import classNames from "classnames";
import { Forward, Save, SaveAlt } from "@mui/icons-material";

const Footer: React.FC = () => {
  const [resultOfDice, setResultOfDice] = useState<number | string>("");
  const [args, setArgs] = useState<{
    dice: number;
    surface: number;
    alpha: number;
  }>({
    dice: 0,
    surface: 0,
    alpha: 0,
  });

  const diceRollerStyle = {
    input: "w-[24%] h-full text-center text-[18px] rounded-md",
    p: "flex items-center justify-center w-[14%] bg-white text-[18px] font-semibold",
  };

  const updateArgs = (value: string, key: string) => {
    setArgs((prev) => ({ ...prev, [key]: Number(value) }));
  };

  const reflectDiceRoll = () => {
    if (args?.surface && args.dice) {
      setResultOfDice(rollDice(args));
    }
  };

  return (
    <div
      className={classNames(
        "fixed bottom-0 left-0",
        "flex items-center",
        "w-[100vw] h-[8vh] z-30",
        "bg-[rgb(12,12,12)]"
      )}
    >
      <div className="flex items-center w-[75%] h-[60%] ml-3">
        <div className="flex h-full bg-white rounded-md">
          <input
            type="number"
            onChange={(e) => updateArgs(e.target.value, "dice")}
            className={diceRollerStyle.input}
          />
          <p className={diceRollerStyle.p}>d</p>
          <input
            type="number"
            onChange={(e) => updateArgs(e.target.value, "surface")}
            className={diceRollerStyle.input}
          />
          <p className={diceRollerStyle.p}>+</p>
          <input
            type="number"
            onChange={(e) => updateArgs(e.target.value, "alpha")}
            className={diceRollerStyle.input}
          />
        </div>
        <button onClick={reflectDiceRoll} className="h-full ml-2 aspect-[1/1]">
          <img src="/images/dice.jpg" className="w-full rounded-md" />
        </button>
        <Forward
          className={styles.icon}
          style={{
            margin: "0 8px",
            color: "white",
          }}
        />
        <p
          className={classNames(
            "flex items-center justify-center",
            "h-[80%] aspect-[5/3] mr-3",
            "border-b border-white",
            "text-[20px] font-semibold text-white"
          )}
        >
          {resultOfDice}
        </p>
      </div>
      <button className="h-[60%] aspect-[1/1] rounded-md bg-[#65bf61] mr-2">
        <Save style={{ color: "white" }} />
      </button>
      <button className="h-[60%] aspect-[1/1] rounded-md bg-[#3d87ca] mr-3">
        <SaveAlt style={{ color: "white" }} />
      </button>
    </div>
  );
};

export default Footer;
