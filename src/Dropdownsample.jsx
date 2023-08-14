import React from "react";
import Dropdown from "./components/Dropdown"
import { useState } from "react";

const Dropdownsample = () => {
  const [value, setValue] = useState(1);
  const countryOptions = [
    { value: 1, label: "South Korea" },
    { value: 2, label: "US" },
    { value: 3, label: "Japan" },
    { value: 4, label: "France" },
    { value: 5, label: "Germany" },
    { value: 6, label: "Austrailia" },
    { value: 7, label: "Japan" },
  ];

  const handleChange = (dropdownValue) => {
    setValue(dropdownValue);
  };

  return (
    <div>
      <Dropdown
        s={"md"}
        width={160}
        value={value}
        defaultValue={value}
        onChange={handleChange}
        options={countryOptions}
        withSearchInput={true}
      />
    </div>
  );
};

export default Dropdownsample;
