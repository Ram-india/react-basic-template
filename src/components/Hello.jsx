import { Component } from "react";

//Hello Component
class Hello extends Component{
    render(){
        return(
            <div>
                <h1>Hell {this.props.name}!</h1>
            </div>
        )
    }
} 
export default Hello;
