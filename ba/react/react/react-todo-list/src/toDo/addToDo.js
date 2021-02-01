import React, { useState } from "react";
import PropTypes from "prop-types";

function AddToDo({ onCreate }) {
  const [value, setValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    console.log(event.target);
    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  }

  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={submitHandler}>
      <input
        style={{ width: "520px" }}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

AddToDo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddToDo;
