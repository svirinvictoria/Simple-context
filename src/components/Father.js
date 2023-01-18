import React, {useContext} from "react";
import Son from "./Son";
import ContextGreeting from "../store/context-greeting";
import Daughter from "./Daughter";

const Father = () => {
    const ctx = useContext(ContextGreeting);

    const fatherClickHandler = () => {
        ctx.doSomething("Hello I'm a Father");
    }
    return (
        <div>
          <h2>Father</h2>
          <p>{ctx.title}</p>
          <button onClick={fatherClickHandler}> Click Father </button>
          <Son />
          <Daughter />
        </div>
    
    );
};

export default Father;