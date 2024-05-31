import { createContext,useState } from "react";
import B from'./components/B';

 //1.create a context to store the name
 const NameContext = createContext();
 
 //2. Warp the component tree with the context provider
 const App = () => {
    const [name, setName] = useState('Ram');
  return(

    <NameContext.Provider value={{name, setName}}>
        <B />
    </NameContext.Provider>
  ) 
 }
 export { App as default, NameContext}