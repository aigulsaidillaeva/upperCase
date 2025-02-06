import React, { useState } from "react";
import { Input } from "./components/Input";

const App = () => {
  const [inputValue1, setInputValue1] = useState();

  const upercaseText = (e) => {
    setInputValue1(e.target.value);
    console.log(e.target.value);
  };
  const lowercase = (e) => {
    setInputValue1(e.target.value);
  };

  return (
    <div>
      <Input
        placeholder="TEXT"
        value={inputValue1}
        onChange={lowercase}
        variant="lower"
      />
      <Input
        placeholder="TEXT"
        value={inputValue1}
        onChange={upercaseText}
        variant="upper"
      />
    </div>
  );
};

export default App;
