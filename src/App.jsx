
const App = () => {
  const students = [
    {id:1, name:"Ram", age:20},
    {id:2, name:"Ramya", age:19},
    {id:3, name:"Kumar", age:28},
    {id:4, name:"Raman", age:20},
  ]

  const studentsList = []
  for (let i = 0; i < students.length; i++){
    studentsList.push(
      <li key={students[i].id}>{students[i].name} {students[i].age}</li>
    )
  }
  return (
    <div>
      <h1>Students</h1>
      <ul>
        {studentsList}
      </ul>
    </div>
  )
}

export default App