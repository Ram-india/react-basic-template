const App = () => {

const isLogIn = false;
return(
  <div>
    {isLogIn && <p>Welcome Back!</p>}
    {!isLogIn && <p>Please Login</p>}
  </div>
)
}
export default App
