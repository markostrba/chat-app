import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../UserContext";

export default function AuthForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false); //Toggle between login/register

  const { setUsername: setLoggedInUsername, setId } = useContext(UserContext);
  async function handleSubmit(e) {
    e.preventDefault();
    const { data } = await axios.post(`/${isLogin ? "login" : "register"}`, {
      username,
      password,
    });
    setLoggedInUsername(username);
    setId(data._id);
  }

  return (
    <div className="bg-blue-50 h-screen flex items-center mb-12">
      <form className="w-64 m-auto" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          className="block w-full rounded-sm p-2 mb-2 bg-white outline-none font-500 border border-slate-100 opacity-80 hover:opacity-100 focus:opacity-100 shadow"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
        />
        {isLogin ? (
          <input
            type="password"
            placeholder="password"
            className="block w-full rounded-sm p-2 mb-2 bg-white outline-none font-500 border border-slate-100 opacity-80 hover:opacity-100 focus:opacity-100 shadow"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        ) : (
          <input
            type="password"
            placeholder="password"
            className="block w-full rounded-sm p-2 mb-2 bg-white outline-none font-500 border border-slate-100 opacity-80 hover:opacity-100 focus:opacity-100 shadow"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
          />
        )}

        <button className="bg-blue-500 text-white block w-full rounded-sm p-2 shadow-sm active:shadow-none active:translate-y-[2px] cursor-pointer opacity-80 hover:opacity-100 active:opacity-100">
          {isLogin ? "Login" : "Register"}
        </button>
        <div className="text-center opacity-60 hover:opacity-80 mt-2 text-sm">
          {isLogin ? "Don't have an account?" : "Already a member?"}
          <button
            onClick={() => setIsLogin((prev) => !prev)}
            className="cursor-pointer ml-1"
          >
            {isLogin ? "Register here" : "Login here"}
          </button>
        </div>
      </form>
    </div>
  );
}
