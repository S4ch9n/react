
function Button(){
  const styles = {
    backgroundColor:"hsl(200,100%,50%)",
    color:"white",
    borderRadius : "10px",
    border:"none",
    cursor: "pointer",
    fontSize: "100px"
}
  return (
    <button style={styles}>Click me</button>
  );
}
export default Button