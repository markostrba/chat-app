import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="bg-blue-50 h-screen flex items-center mb-12">
      <form className="w-64 m-auto">
        <input
          type="text"
          placeholder="username"
          className="block w-full rounded-sm p-2 mb-2 bg-white outline-none font-500 border border-slate-100 opacity-80 hover:opacity-100 focus:opacity-100 shadow"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
        />
        <input
          type="password"
          placeholder="password"
          className="block w-full rounded-sm p-2 mb-2 bg-white outline-none font-500 border border-slate-100 opacity-80 hover:opacity-100 focus:opacity-100 shadow"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
        />
        <button className="bg-blue-500 text-white block w-full rounded-sm p-2 shadow-sm active:shadow-none active:translate-y-[2px] cursor-pointer opacity-80 hover:opacity-100 active:opacity-100">
          Register
        </button>
      </form>
    </div>
  );
}
