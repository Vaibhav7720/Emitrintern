import StartInterface from "./components/StartInterface";
import GameInterface from "./components/GameInterface";
import "./index.css";
import { useState } from "react";
import { useSelector } from "react-redux";
function App() {
  const [msg, setMsg] = useState(null);
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <>
      {!user.username && (
        <StartInterface></StartInterface>
      )}
      {user.username && (
        <GameInterface
          msg={msg}
          setMsg={setMsg}
        ></GameInterface>
      )}
      {msg && <p className="text-2xl font-semibold">{msg}</p>}
    </>
  );
}

export default App;
