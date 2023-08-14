import React from "react";
import Optionitem from "./Optionitem";

const Dropdown = ({ options }) => {
  console.log(options)

  return (
    <div>
      {/* input이랑 버튼 */}
      {options.map((elem) => (
        <Optionitem key={elem.value}  value={elem.value} label={elem.label} />
      ))}
    </div>
  );
};

export default Dropdown;