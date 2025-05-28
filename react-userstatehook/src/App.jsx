//react hook  : special function that allows functional components to use React feature without writing class components (reactv 16.8) 
//(userState , userEffect , userContent , userReducer , userCallback and more.....)

//userState() : A react hook thaat allows creation of a stateful variable And a setter function to update  its value in the virtual DOM.
//[name, student]

import Mycomponent from "./Mycomponent"
import Counter from "./counter";

function App() {
  // return(<Mycomponent/>);
  return(<Counter/>);

}

export default App
