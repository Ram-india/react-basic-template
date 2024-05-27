import { useEffect, useState } from "react";

 //Component:App
 const App = () => {
    let[count, setCount] = useState(0);
    useEffect(() =>{
        console.log("component is mounted")
    });

const handleIncrement = () =>{
    setCount(count + 1)
}
const handleDecrement = () =>{
    setCount(count - 1)
}
const handleReset = () =>{
    setCount(0  )
}

  return (
    <div>
        <h1>counter:{count}</h1>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
 }
 export default App;