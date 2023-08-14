import React from "react";
import Optionitem from "./Optionitem";
import { useState } from "react";

const Dropdown = ({ options }) => {
  const [detailShow, changeDetailShow] = useState(0);
  const [chosenOption, changeOption] = useState(null);
  const showOption = () => {
    if (detailShow) {
      changeDetailShow(0);
    } else {
      changeDetailShow(1);
    }
  };

  if (detailShow) {
    return (
      <div>
        {/* input이랑 버튼 */}
        <div className="w-80 h-10 border border-gray-200 rounded-xl flex flex-row items-center">
          <div className='basis-4/5 font-thin pl-6'>{chosenOption}</div>
          <button
            onClick={showOption}
            className="text-3xl"
          >⬇️</button>
        </div>
        {options.map((elem) => (
          <Optionitem
            key={elem.value}
            value={elem.value}
            label={elem.label}
            changeOption={changeOption}
            changeDetailShow={changeDetailShow}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <div className="w-80 h-10 border border-gray-200 rounded-xl flex flex-row items-center">
          <div className='basis-4/5 font-thin pl-6'>{chosenOption}</div>
          <button
            onClick={showOption}
            className="text-3xl"
          >⬇️</button>
        </div>
      </div>
    );
  }
};

export default Dropdown;
