import React from "react";
import Optionitem from "./Optionitem";
import { useState } from "react";

const Dropdown = ({ options }) => {
  const [detailShow, changeDetailShow] = useState(0)
  const showOption = () => {
    if (detailShow){
      changeDetailShow(0)
    }else{
      changeDetailShow(1)
    }
  }

  if (detailShow){
    return (
      <div>
        {/* input이랑 버튼 */}
        <button style={{ width: 100, height: 30, backgroundColor: "blue" }} onClick={showOption}/>
        
        {options.map((elem) => (
          <Optionitem key={elem.value} value={elem.value} label={elem.label} />
        ))}
      </div>
    );
  }else{
    return(
      <button style={{ width: 100, height: 30, backgroundColor: "blue" }} onClick={showOption}/>
    )
  }

};

export default Dropdown;
