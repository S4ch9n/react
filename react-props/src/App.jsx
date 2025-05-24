//props : read only properties that are shared between components.
//  A parent component can send data to a child component.
//   <component key = value



import Student  from "./Student";
function App() {
  return(
    <>
    <Student name="Spongebob" age={30} isStudent ={true}/>
    <Student name="Patrick" age={42} isStudent = {false}/>
    <Student name="John" age={52} isStudent = {false}/>
    <Student name="Sandy" age={27} isStudent = {true}/>
    <Student name="Sandy" age={27} isStudent = {true}/>
    <Student />
    </>
  );
}

// if i want to add some data to my student component , then studnet is going to be child in this case
export default App
