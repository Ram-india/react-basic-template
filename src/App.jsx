
import B from'./components/B';
import { NameProvider } from './context/NameContext';


 
 //2. Warp the component tree with the context provider
 const App = () => {
    
    return(
        <NameProvider>
            <B/>
        </NameProvider>
    )
 }
 export default App;