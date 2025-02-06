import axios from "axios";
import Register from "./components/Register";
import { UserContextProvider } from "./UserContext";
import { useContext } from "react";

function App() {
  axios.defaults.baseURL = "http://localhost:4000/";
  axios.defaults.withCredentials = true;
  return (
    <div>
      <UserContextProvider>
        <Register />
      </UserContextProvider>
    </div>
  );
}

export default App;
