
function Button(){
  // let count = 0;
  // const handleClick = (name) => {
  //   if(count < 3){
  //     count++
  //     console.log(`${name} you clicket me ${count} times`);
  //   }else{
  //     console.log(`${name} stop clicking me`);

  //   }
  // }

  //event parameter
  const handleClick = (e) => e.target.textContent = "You clicked hard :( ";
  return(
    <button onClick ={(e) => handleClick(e)}>Click me</button>
  );
}
export default Button