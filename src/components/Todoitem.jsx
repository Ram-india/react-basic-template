
const Todoitem = ({todo}) => {
  return (

        <div>
            <input
            type="checkbox"
            checked={todo.completed}/>
            <span>
            <strong>{todo.title}</strong>
            <br/>
          <em>{todo.description}</em>
            </span>
        </div>
           
          
  )
}

export default Todoitem