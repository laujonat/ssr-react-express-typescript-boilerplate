import React, {useState} from "react";


function Counter() {

  function incrementCounter() {
    console.log("hello")
  }

  return (
    <div>
      <h1>counter at: Hi</h1>
      <button
        onClick={incrementCounter}
      />
    </div>
  )
}

export default Counter;
