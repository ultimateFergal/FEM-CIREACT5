import React from "react";

const Details = (props) => {
  return (
    <pre>
      <code>{JSON.stringify(props, null, 4)}</code>
    </pre> /* To be able to visualize everytihng that comes from the router */
  );
};

export default Details;
