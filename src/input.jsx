import React from 'react';

const Input = (props) => (
  <div>
    <h1>CNA Assign ...</h1>
    <div id="maininput">
      <input
        type="text"
        placeholder="Enter commands here ..."
        onKeyDown={props.enter}
        autoFocus={true}
        id="main"
      />
    </div>
  </div>
);

export default Input;
