import {useState} from "react";

const Square = ({value, id, onSquareClick}) => {

  return (
    <button
      className="flex square box-content border w-10 h-10 mt-0 mb-0 mr-0 ml-0 text-2xl font-thin items-center justify-center"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
