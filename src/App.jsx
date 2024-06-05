import { useRef } from "react";

 //Component:App
 const App = () => {
    //create reffernce using useref
    const inputRef = useRef(null);
    const inputRef1 = useRef(null);
   

    const handleClick = () =>{
       //console.log(inputRef.current.value   );
       inputRef.current.focus();
       
      
 
    }
    const handleClick1 = () =>{
        //console.log(inputRef.current.value   );
        
        inputRef1.current.focus();
       
  
     }

  return (
    <>
    <input
    type="text"
    
    ref={inputRef}/>
    <button onClick={handleClick}>Focus input</button>
    <br/>
    <br/>
    <input
    type="text"
  
    ref={inputRef1}/>
    <button onClick={handleClick1}>Focus input</button>
    </>
  )
 }
 export default App;