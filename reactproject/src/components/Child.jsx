import React from "react";
function Child({ count }) {
  console.log("Child component is being rerendered");
  return <div>Chile count is {count}</div>;
}
export default React.memo(Child);
