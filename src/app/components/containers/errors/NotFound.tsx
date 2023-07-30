import React from "react";

const NotFound = ({ message }) => (
  <div className="column p-4 is-centered">
    <p className="has-text-centered">
      {message ? message : "Страница не найдена :("}
    </p>
  </div>
);

export default NotFound;
