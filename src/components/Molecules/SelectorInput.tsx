import React, { useState } from "react";

// modules
import classNames from "classnames";

// util
import { themeColors } from "../../styles/styles";

type PROPS = {
  id: string;
  className: string;
  style?: React.CSSProperties;
  label: string;
  value: string;
  options: { display: string; value: any }[];
  onChange: (value: any | null) => void;
};

const SelectorInput: React.FC<PROPS> = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={classNames(props.className, "flex flex-col")}
      style={props.style}
    >
      <label
        htmlFor={props.id}
        className="text-sm"
        style={{ color: themeColors.border }}
      >
        {props.label}
      </label>
      <select
        id={props.id}
        className="bg-transparent focus:outline-none text-white"
        style={{
          borderBottom: `2px solid ${
            isFocused ? themeColors.accent : themeColors.border
          }`,
        }}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        {props.options.map((element, index) => (
          <option
            key={index}
            className="text-sm text-black"
            value={element.value}
            onClick={(e) => e.stopPropagation()}
          >
            {element.display}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectorInput;
