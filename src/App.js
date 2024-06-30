import "./App.css";
import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./components/routes";
import QueryContext from "./context/QueryContext";
function App() {
  const [userQuery, setUserQuery] = useState("");
  function getQuery(query) {
    setUserQuery(query);
  }
  return (
    <QueryContext.Provider value={{ userQuery, getQuery }}>
      <RouterProvider router={router} />
    </QueryContext.Provider>
  );
}

export default App;
