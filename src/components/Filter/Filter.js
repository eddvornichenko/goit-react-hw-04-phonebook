import React from "react";

const Filter = ({ filter }) => {
  return (
    <div>
      <label>
        Find contacts by name <br />
        <input type="text" placeholder="Enter filter" onChange={filter} />
      </label>
    </div>
  );
};
export default Filter;