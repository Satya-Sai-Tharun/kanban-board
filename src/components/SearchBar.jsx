import React from "react";
import { useTasks } from "../context/TaskContext";

const SearchBar = () => {
  const { setSearchTerm } = useTasks();

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search tasks..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full lg:w-1/2 p-2 border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default SearchBar;
