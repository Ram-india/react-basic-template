import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Todoitem from "../components/Todoitem";

//define a loader function
export const loader = async () => {

  //make an async call to fetch data
  const todos = await axios.get(
    `https://665eb6201e9017dc16f109e0.mockapi.io/todos`
  );

  //return the data
  return todos.data;
};

const Todos = () => {

    // use the data

  const todos = useLoaderData();
 // console.log(todos);

  return (
    <div>
      <h1>Todo List</h1>
      
        {
        todos.map((todo) => (
          <Todoitem
          todo={todo}
          key={todo.id}
          />
        ))
        }
      
    </div>
  );
};

export default Todos;
