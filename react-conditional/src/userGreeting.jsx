import PropTypes from 'prop-types';


function userGreeting(props){
  // if(props.isLoggedIn){
  //   return <h2>Weclome {props.username}</h2>
  // }else{
  //   return <h2>Please login to continue</h2>
  // }

  // //terniary operator
  // return(props.isLoggedIn ?
  //    <h2 className ="welcome-message" >Welcome {props.username}</h2>
  //   : <h2 className ="login-prompt">Please login to continue</h2>
  // )

  //another method using ternary 
  const welcome_message = 
  <h2 className="welcome-message">Weclome {props.username}</h2>;
  const login_prompt = <h2 className="login-prompt">Please login to continue</h2>
  return(props.isLoggedIn ? welcome_message : login_prompt)
}

//prop types
userGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

//default props
userGreeting.defaultProps = {
  isLoggedIn : false,
  username : "Guest",
}

export default userGreeting