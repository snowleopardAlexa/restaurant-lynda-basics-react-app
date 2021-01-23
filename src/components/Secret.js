import React, {useState} from "react";


function SecretAuth() {
    return <h1>Super secret information for authorized users only.</h1>
}

function RegularComp() {
    const [checked, setChecked] = useState(false);
    return (
      <>
        <input 
          type="checkbox" 
          value={checked} 
          onChange={() => setChecked((checked) => !checked)}
        />
        <p>{checked ? "checked" : "not checked"}</p>
      </>
    );
}

function Secret(props) {
   return (
       // ternary if statement
       <>
         {props.authorized ? <SecretAuth /> : <RegularComp /> }
       </>
   )
}

export default Secret;