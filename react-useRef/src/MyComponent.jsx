// useState : Re- renders the  component when the state value changes.

// useRef() : "use reference" Does not cause re - render when its value changes.When you want a component to "remember" some information , but you dont want that information to trigger new renders.

// 1. Accessing/ Interacting with DOM elements
// 2 . Handling Focus , Animation , and Transition
//  3 . Managing Timers and Intervals

import React, { useState, useEffect, useRef } from "react";

function MyComponent() {

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log("COMPONENT RENDERED");
  })

  function handleClick1() {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "red";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";

  }
  function handleClick2() {
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "red";
    inputRef3.current.style.backgroundColor = "";
  }
  function handleClick3() {
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "red";
  }

  return (
    <div>
      <button
        onClick={handleClick1}
      >
Click me 1
  </button >
  <input ref={inputRef1} />

  <button
        onClick={handleClick2}
      >
Click me 2
  </button >
  <input ref={inputRef2} />

  <button
        onClick={handleClick3}
      >
Click me 3
  </button >
  <input ref={inputRef3} />
  </div>
  )
}

export default MyComponent