import { TextField } from "@material-ui/core";
import React from "react";

const Search = ({ searchTerm, handleSearch }) => {
  // {searchTerm, handleSearch}=props

  return (
    <div>
      <TextField
        label="Search by name"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
