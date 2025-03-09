import React, { useState } from "react";

// modules
import classNames from "classnames";

// util
import { themeColors } from "../../styles/styles";

type PROPS = {
  id: string;
  className: string;
  label: string;
  value: string;
  onChange: (value: any | null) => void;
};

const TextInput: React.FC<PROPS> = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={classNames(props.className, "flex flex-col")}>
      <label
        htmlFor={props.id}
        className="text-sm"
        style={{ color: themeColors.border }}
      >
        {props.label}
      </label>
      <input
        id={props.id}
        className="rounded focus:outline-none"
        style={{
          backgroundColor: themeColors.fill,
          border: `2px solid ${
            isFocused ? themeColors.accent : "rgba(0, 0, 0, 0)"
          }`,
        }}
        type="text"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default TextInput;
