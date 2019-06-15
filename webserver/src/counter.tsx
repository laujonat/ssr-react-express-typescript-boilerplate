import React, {useState} from "react";

export interface CounterProps {
}

export interface CounterState {
  counter: number
}

interface Counter {
  state: CounterState
}

function Counter(props: CounterProps, state: CounterState) {

  const [counter, setCounter] = useState(0)

  function incrementCounter() {
    setCounter(counter + 1);
  }

    return (
      <div>
        <h1>counter at: {counter}</h1>
        <button
          onClick={incrementCounter}
        />
      </div>
    )
}

export default Counter;
