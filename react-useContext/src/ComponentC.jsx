import React, { useContext } from "react";
import { UserContext } from "./ComponentA";
import ComponentD from "./ComponentD";

function ComponentC() {
  const user = useContext(UserContext); // Retrieve the user context

  return (
    <div className="box">
      <h1>ComponentC</h1>
      <h2>{`Hello again, ${user || "Guest"}`}</h2> {/* Provide a fallback for null/undefined user */}
      <ComponentD />
    </div>
  );
}

export default ComponentC;
