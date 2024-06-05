
import{ useName} from "../context/NameContext";

const D = () =>{
    
    const {name, setName} = useName();

    return(
    <>
    <h1>Hello, { name}!</h1>
    <p>from D component</p>
    </> )
}
export default D;