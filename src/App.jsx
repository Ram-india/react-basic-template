import Todo from "./components/Todo";


export const App = () => {
const todos = [
  {id:1, title:'Business Planing', completed:'flase'},
  {id:2, title:'Salary calculation', completed:'true'},
  {id:3, title:'Loan Repayment', completed:'true'},
  {id:4, title:'ROI Planing', completed:'true'},
  {id:5, title:'Business meet', completed:'flase'}
]

  return (
    <div>
      <h1>Todo</h1>
      <ul>
        {
          todos.map(todo =>
            <Todo key = {todo.id} todo = {todo} />
            )
        }
      </ul>

    </div>
  )
}
export default App;