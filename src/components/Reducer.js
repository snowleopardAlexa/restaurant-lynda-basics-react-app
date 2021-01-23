import React, { useReducer } from "react";

// REDUCER - takes the current state and it returns the new state
// REDUCER - instead of hard-coding we can call function toggle
// useReducer is usually preferable to useState when you have complex state logic that involves
// multiple sub-values or when the next state depends on the previous one. 
// It also lets you optimize performance for components that trigger deep updates because
// you can pass dispatch down instead of callbacks. 

function Reducer() {

    const [checked, toggle] = useReducer(
        (checked) => !checked,
        false
    );

    return (
      <>  
       <input
          type="checkbox"
          value={checked}
          onChange={toggle}
       />
       <p>Second way</p>
       <p>{checked ? "checked" : "not checked"}</p>
      </>
    );
}

export default Reducer;