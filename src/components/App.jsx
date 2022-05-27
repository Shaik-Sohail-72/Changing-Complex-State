/*import React from "react";

function App() {
  const [fname,setfname]=React.useState("");
  const [lname,setlname]=React.useState("");
  function updatefname(event)
  {
    const newfname=event.target.value;
    setfname(newfname);
  }
  function updatelname(event)
  {
    const newlname=event.target.value;
    setlname(newlname);
  }
  return (
    <div className="container">
      <h1>Hello {fname} {lname}</h1>
      <form>
        <input onChange={updatefname} name="fName" placeholder="First Name" />
        <input onChange={updatelname} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
*/

import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lname: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
