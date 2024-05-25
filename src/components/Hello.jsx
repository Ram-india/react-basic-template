import App from "../App"

 //Component : Hello

 const Hello = (props) => {
    console.log(props)
    return(<h1>Sri Angalamman{props.name}</h1>)
   }
export default Hello;