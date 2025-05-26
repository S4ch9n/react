//conditional rendering = allow you to control what gets rendered in your application based on certain conditions(show  hide or change components)
import UserGreeting from './userGreeting'
function App() {
  return(
    <>
    <UserGreeting isLoggedIn = {true}/>
    </>
  );
}

export default App
