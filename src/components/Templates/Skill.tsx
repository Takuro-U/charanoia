import React, { RefObject } from "react";

// styles
import styles from "../../styles/Skill.module.scss";
import { themeColors } from "../../styles/styles";

// components
import SkillCard from "../Organisms/SkillCard";

// assets
import { skillCategories } from "../../assets/lists";

type PROPS = {
  category: "action" | "knowledge";
  scrollPosition: { [key: string]: number };
  scrollRef: { [key: string]: RefObject<HTMLDivElement> };
  handleScroll: (category: string) => void;
};

const Skill: React.FC<PROPS> = (props) => {
  return (
    <div className="mb-[30px]">
      <div
        className={styles.wrapper}
        ref={props.scrollRef[props.category]}
        onScroll={() => props.handleScroll(props.category)}
      >
        {skillCategories[props.category].map((element, index) => (
          <SkillCard
            key={index}
            index={index}
            name={element}
            category={props.category}
          />
        ))}
      </div>
      <div className={styles.scrollBar}>
        <div className="w-[90%] rounded bg-slate-100">
          <div
            className="w-1/3 h-[5px] rounded bg-black"
            style={{
              backgroundColor: themeColors.accent,
              transform: `translateX(${
                props.scrollPosition[props.category]
              }px)`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
