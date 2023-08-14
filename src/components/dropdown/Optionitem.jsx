import React from 'react';

const Optionitem = ({value, label, changeOption, changeDetailShow}) => {
  const changingOption = () => {
    console.log('changing in to', label);
    changeOption(label);
    changeDetailShow(0);
  }
  return (
    <button onClick={changingOption} className='font-thin block'>
      {label}
    </button>
  );
};

export default Optionitem;