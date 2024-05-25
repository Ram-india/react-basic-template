
const App = () => {
  const students = [
    {id:1, name:"Ram", age:20},
    {id:2, name:"Ramya", age:19},
    {id:3, name:"Kumar", age:28},
    {id:4, name:"Raman", age:20},
  ]

  return (
    <div>
      <h1>Students</h1>
      <ul>
        {
        students.map((student) =>
          <li key={student.id}> {student.name} {student.age}</li>
        )
        }
      </ul>
    </div>
  )
}

export default App