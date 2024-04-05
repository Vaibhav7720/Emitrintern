import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUsername } from "../redux/user/userSlice";

const StartInterface = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  console.log(user);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setUsername(user));
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col gap-4 justify-center items-center h-full"
    >
      <input
        placeholder="username"
        type="text"
        className="p-4 border text-semibold rounded-lg text-black"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      ></input>
      <button
        type="submit"
        className="text-2xl font-semibold text-black h-4 p-6 bg-white rounded-lg text-center flex justify-center items-center hover:opacity-95"
      >
        Start Game
      </button>
    </form>
  );
};

export default StartInterface;
