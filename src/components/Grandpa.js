import React, {useState} from 'react';
import Father from './Father';
import ContextGreeting from '../store/context-greeting';

const Grandpa = () =>{
const [myTitle, setMyTitle] = useState('Hello'); 

    return (
      <div>
        <ContextGreeting.Provider
          value={{ title: myTitle, doSomething: setMyTitle }}
        >
          <h1> Grandpa </h1>
          <p> {myTitle} </p>
          {/* <button onClick={grandpaClickHandler}>Click Grandpa</button> */}
          <Father />
        </ContextGreeting.Provider>
      </div>
    );
};

export default Grandpa;