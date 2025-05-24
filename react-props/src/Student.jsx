
//propTypes : a mechanism that ensures the the passed value is of the correct datatype is of the correct datatype
// age : ProtoTypes.number

//default props = default values for props in case they are not passed away from the parent component
// name : "Guest"


import PropTypes from 'prop-types'

function Student(props){ //props is a parameter which is going to be javascript object
  return(
    <div className="student">
      <p>Name : {props.name}</p>
      <p>Age : {props.age}</p>
      <p>Student : {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}


//use of  prop types:
Student.propTypes = {
  name : PropTypes.string,
  age : PropTypes.number,
  isStudent : PropTypes.bool
}


//default props
Student.defaultProps = {
  name : "Guest",
  age : 0,
  isStudent : false,
}
export default Student