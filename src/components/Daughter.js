import React, { useContext } from "react";
import ContextGreeting from "../store/context-greeting";

const Daughter = () => {
  const ctx = useContext(ContextGreeting);

  const daughterClickHandler = (greeting) => {
    ctx.doSomething("Hello I'm a Daughter");
  };

  return (
    <div>
      <h4>Daughter</h4>
      <p>{ctx.title}</p>
      <button onClick={daughterClickHandler}>Click Daughter</button>
    </div>
  );
};

export default Daughter;
