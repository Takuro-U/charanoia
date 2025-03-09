import React, { RefObject, useRef, useState } from "react";

// components
import Skill from "./Skill";

const Skills: React.FC = () => {
  const [scrollPosition, setScrollLeft] = useState<{ [key: string]: number }>({
    action: 0,
    knowledge: 0,
  });

  const scrollRef: { [key: string]: RefObject<HTMLDivElement> } = {
    action: useRef<HTMLDivElement>(null),
    knowledge: useRef<HTMLDivElement>(null),
  };

  const handleScroll = (key: string) => {
    if (scrollRef[key].current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef[key].current;
      setScrollLeft((prev) => ({
        ...prev,
        [key]: (scrollLeft / (scrollWidth - clientWidth)) * clientWidth * 0.6,
      }));
    }
  };

  return (
    <>
      <Skill
        category="action"
        scrollPosition={scrollPosition}
        scrollRef={scrollRef}
        handleScroll={handleScroll}
      />
      <Skill
        category="knowledge"
        scrollPosition={scrollPosition}
        scrollRef={scrollRef}
        handleScroll={handleScroll}
      />
    </>
  );
};

export default Skills;
