import React, { useEffect, useRef } from "react";
const Users = (props) => {
  const lastVal = useRef();
  useEffect(() => {
    lastVal.current = props.counter;
  });
  const previousProps = lastVal.current;
  return (
    <div>
      {props.counter}
      {previousProps}
    </div>
  );
};

export default Users;
