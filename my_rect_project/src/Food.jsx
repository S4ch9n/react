
function Food(){
  const food = "Orange"
  const food2 = 'Banana'
  return(
    <ul>
      <li>Apple</li>
      <li>{food}</li>
      <li>{food2.toUpperCase()}</li>
    </ul>
  );
}
export default Food

//if we want to use javascripi inside the return statement then we need to use {}(parenthesies) , but outside of we dont need not to use {}