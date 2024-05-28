import { Component } from "react"
import Hello from "./components/Hello";

//App component
class App extends Component {
    //override render method
    render(){
        //return jsk
        return(
            <Hello
            name = "Ram"/>
        )

    }
}
export default App;