import { createContext,useContext,useEffect,useState } from "react"

 //1.create a context to store the name
 const NameContext = createContext();
 
 const D = () =>{
    //3.use the context in the component
    const {name, setName} = useContext(NameContext);

    useEffect(() =>{
        setTimeout(()=>{
           setName('Ramkumar');
        },5000)
        
         })
    return <h1>Hello,{name}!</h1>
}
 const C = () =>{
    return <D/>
       
 }
 const B = () =>{
    return <C/>
 }
 
 //2. Warp the component tree with the context provider
 const App = () => {
    const [name, setName] = useState('Ram');
  return(

    <NameContext.Provider value={{name, setName}}>
        <B />
    </NameContext.Provider>
  ) 
 }
 export default App;