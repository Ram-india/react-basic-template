import Hello from "./components/Hello";
 
 
 
 //Component:App
 const App = () => {
    const a =20;
    const b = 20;
    const now =new Date();
  return (
    <div>
      date:{now.toString()}
      <p>value of a is {a}b value is {b} and total is {a+b}</p>
      <Hello/>
    </div>
  )
  
 }
 export default App;