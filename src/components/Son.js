import React, {useContext} from "react";
import ContextGreeting from "../store/context-greeting";

const Son = () => {

const ctx = useContext(ContextGreeting);

const sonClickHandler = () =>{
    ctx.doSomething("Hello I'm a Son");
}

    return (
        <div> 
            <h4>Son</h4>
            <p>{ctx.title}</p>
            <button onClick = {sonClickHandler}>Click Son</button>
        </div>
    )
};

export default Son;