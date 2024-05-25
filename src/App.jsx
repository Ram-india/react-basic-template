const App = () => {

const isLogIn = false;
return(
  <div>
    {
      isLogIn ? <p>Welcome Back!</p> : <p>Please Loggin!</p>
    }
  </div>
)
}
export default App
