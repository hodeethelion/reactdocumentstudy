import React from 'react';

const Optionitem = ({value, label, changeOption, changeDetailShow}) => {
  const changingOption = () => {
    console.log('changing in to', label);
    changeOption(label);
    changeDetailShow(0);
  }
  return (
    <div onClick={changingOption}>
      {label}
    </div>
  );
};

export default Optionitem;