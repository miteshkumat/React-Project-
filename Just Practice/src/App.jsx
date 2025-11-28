import React, { useState } from "react";

const App = () => {
  // const [num, setnum] = useState(0);

  // const incraeseNum = () => {
  //   setnum(num + 1);
  // };

  // const decraeseNum = () => {
  //   setnum(num - 1);
  // };

  const [user, setUser] = useState("");

  const submitHandler = (e) => {
    console.log(e);
    
    e.preventDefault();
    console.log("form submitted", user);

    setUser('')
  };

  return (
    <div className="main">
      {/* <div className="header">
      <h1>{num}</h1>
      <button 
        onClick={() => {
          incraeseNum();
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          decraeseNum();
        }}
      >
        Decrease
      </button>
    </div> */}

      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          onChange={(e) => {
            setUser(e.target.value);
          }}
          value={user}
          type="text"
          placeholder="Enter Your Name"
        />
        <button>Click</button>
      </form>
    </div>
  );
};

export default App;
