import React from 'react';

const Term = props => {
  return (
    <div>
      {props.terms.map(term => (
        <span>
          <label>{term.termName}: </label>
          <input type="checkbox" />
        </span>
      ))}
    </div>
  );
};

export default Term;
