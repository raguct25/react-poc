import { useRef, useState } from "react";

export default function UseRefComponent() {
  let renderCount = useRef(0);
  renderCount.current = renderCount.current + 1;
  console.info("renderCount: " + renderCount.current);

  const [test, setTest] = useState("ragu");

  // create a ref
  const counter = useRef(0);

  // increase the counter by one
  const handleIncreaseCounter = () => {
    setTest(test + "dhkjdk");
    counter.current = counter.current + 1;
    console.log("function called", counter);
  };

  return (
    <div>
      <h1>Learn about useRef!{test}</h1>
      <h2>Value: {counter.current}</h2>
      <button onClick={handleIncreaseCounter}>Increase counter</button>
    </div>
  );
}

// import { useEffect, useRef } from "react";

// export default function App() {
//   // create a ref
//   const counter = useRef(0);

//   // increase the counter by one
//   const handleIncreaseCounter = () => {
//     counter.current = counter.current + 1;
//     console.log("handleIncreaseCounter: ", counter.current);

//   };

//   useEffect(() => {
//     console.log("use effect counter changed to: ", counter.current);
//   }, [counter]);

//   return (
//     <div>
//       <h1>Learn about useRef!</h1>
//       <h2>Value: {counter.current}</h2>
//       <button onClick={handleIncreaseCounter}>Increase counter</button>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";

// export default function App() {
//   // create a counter
//   const [counter, setCounter] = useState(0);

//   // increase the counter by one
//   const handleIncreaseCounter = () => {
//     setCounter(counter + 1);
//   };

//   useEffect(() => {
//     console.log("counter changed to: ", counter);
//   },[counter]);

//   return (
//     <div>
//       <h1>Learn about useRef!</h1>
//       <h2>Value: {counter}</h2>
//       <button onClick={handleIncreaseCounter}>Increase counter</button>
//     </div>
//   );
// }

// import React, { useRef, useEffect } from "react";

// export default function App() {
//   // Initialized a hook to hold the reference to the title div.
//   const titleRef = useRef<any>();

//   useEffect(function () {
//     setTimeout(() => {
//       titleRef.current.textContent = "Updated Text";
//     }, 2000); // Update the content of the element after 2seconds
//   }, []);

//   return (
//     <div className="container">
//       {/** The reference to the element happens here **/}
//       <div className="title" ref={titleRef}>
//         Original title
//       </div>
//     </div>
//   );
// }

// import { useRef, useState, useEffect } from "react";

// export default function App() {
//   const timerIdRef = useRef<any>(0);
//   const [count, setCount] = useState(0);

//   const startHandler = () => {
//     if (timerIdRef.current) {
//       return;
//     }
//     timerIdRef.current = setInterval(() => setCount((c) => c + 1), 1000);
//   };

//   const stopHandler = () => {
//     clearInterval(timerIdRef.current);
//     timerIdRef.current = 0;
//   };

//   useEffect(() => {
//     console.log("useEffect called", timerIdRef.current);
//     return () => clearInterval(timerIdRef.current);
//   }, []);

//   return (
//     <div>
//       <div className="timer">Timer: {count}s</div>
//       <div>
//         <button onClick={startHandler}>Start</button>
//         <button onClick={stopHandler}>Stop</button>
//       </div>
//     </div>
//   );
// }

//use memo

// import { useState } from "react";

// export default function App() {
//   const [number, setNumber] = useState(1);
//   const [inc, setInc] = useState(0);

//   const factorial = factorialOf(number);

//   const onChange = (event: any) => {
//     setNumber(Number(event.target.value));
//   };
//   const onClick = () => setInc((i) => i + 1);

//   return (
//     <div>
//       Factorial of
//       <input type="number" value={number} onChange={onChange} />
//       is {factorial}
//       <button onClick={onClick}>Re-render</button>
//     </div>
//   );
// }

// function factorialOf(n: any): any {
//   console.log("factorialOf(n) called!");
//   // console.log(n <= 0 ? 1 : n * factorialOf(n - 1));

//   return n <= 0 ? 1 : n * factorialOf(n - 1);
// }

// import { useState, useMemo, useRef } from "react";

// export default function App() {
//   const [number, setNumber] = useState(1);
//   const [inc, setInc] = useState(0);

//   const renderCount = useRef(0);
//   renderCount.current = renderCount.current + 1;
//   console.info("renderCount: ", +renderCount.current);

//   const factorial = useMemo(() => factorialOf(number), [number]);

//   const onChange = (event: any) => {
//     setNumber(Number(event.target.value));
//   };

//   const onClick = () => {
//     // console.log("inc", inc);

//     setInc((i) => {
//       // console.log("i ---- ", i);
//       return i + 1;
//     });
//   };

//   return (
//     <div>
//       Factorial of
//       <input type="number" value={number} onChange={onChange} />
//       is {factorial}
//       <button onClick={onClick}>Re-render</button>
//     </div>
//   );
// }
// function factorialOf(n: any): any {
//   console.log("factorialOf(n) called!");
//   return n <= 0 ? 1 : n * factorialOf(n - 1);
// }
