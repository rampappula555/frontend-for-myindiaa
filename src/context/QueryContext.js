import React from "react";
const QueryContext = React.createContext({
  userQuery: "",
  getQuery: () => {},
});
export default QueryContext;
