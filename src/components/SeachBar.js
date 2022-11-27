import React, { useState } from "react";

const SeachBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");
  
  const onSubmit = (event) => {
    event.preventDefault();
    // this.props.onFormSubmit(this.state.term)
    onFormSubmit(term);
  };
  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Image Search</label>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SeachBar;

// how to you setState?
