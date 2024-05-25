import Hello from "./components/Hello";
 
 
 
 //Component:App
 const App = () => {

  const name = 'Ram';
 
  return (
    <div>
      <Hello
      name ={name}
      />
    </div>
  )
  
 }
 export default App;