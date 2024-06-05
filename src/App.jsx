import { useRef } from "react";

 //Component:App
 const App = () => {
    //create reffernce using useref
    const inputRef = useRef(null);
   
   

    const handleClick = () =>{
       console.log(inputRef.current.value   );
       inputRef.current.focus();
    }
    const handleChange = () =>{
        inputRef.current.value="Hello ";

    }
   console.log("component Rendering") 

  return (
    <>
    <input
    type="text"
    
    ref={inputRef}/>
    <button onClick={handleClick}>Focus input</button>
   <button onClick={handleChange}>change value</button>
    </>
  )
 }
 export default App;