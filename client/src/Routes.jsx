import { useContext } from "react";
import AuthForm from "./components/AuthForm";
import { UserContext } from "./UserContext";

export default function Routes() {
  const { username, id } = useContext(UserContext);

  if (username) {
    return "logged in";
  }

  return <AuthForm />;
}
