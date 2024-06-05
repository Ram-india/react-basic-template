import { useName } from "../context/NameContext";

const Z = () => {
    const {name, setName} = useName();
  return (
    <div>
        <h1>Helo, {name}</h1>
        <p>from Z component</p>
    </div>
  )
}

export default Z;