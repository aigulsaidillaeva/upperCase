import React, { useState } from "react";
import { Input } from "./components/Input";

const App = () => {
  const [inputValue1, setInputValue1] = useState();

  const handleChange = (e) => {
    setInputValue1(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form>
      <Input
        placeholder="TEXT"
        value={inputValue1}
        onChange={handleChange}
        variant="lower"
      />
      <Input
        placeholder="TEXT"
        value={inputValue1}
        onChange={handleChange}
        variant="upper"
      />
    </form>
  );
};

export default App;
