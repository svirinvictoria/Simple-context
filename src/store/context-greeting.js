import React from "react";

const ContextGreeting = React.createContext({
    title: '',
    doSomething: ()=> { }
});

export default ContextGreeting;