import Card from "../UI/Card";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increasePts, setUsername } from "../redux/user/userSlice";

const GameInterface = ({ msg, setMsg }) => {
  const user = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState([
    "Cat",
    "Bomb",
    "Diffuse",
    "Shuffle",
    "Cat",
  ]);
  const ctype = ["Cat", "Bomb", "Diffuse", "Shuffle", "Cat"];

  const [diffuse, setDiffuse] = useState(0);

  const dispatch = useDispatch();

  const handleOpen = () => {
    //! koi random card value lo
    let inx = Math.floor(Math.random() * 5);
    if (ctype[inx] === "Cat") {
      setMsg("Yay! you got a cat 🐱.You removed one card!!!");
      setType((prev) => prev.slice(0, prev.length - 1));
    } else if (ctype[inx] === "Bomb") {
      if (diffuse > 0) {
        setDiffuse((diffuse) => diffuse - 1);
        setType((prev) => prev.slice(0, prev.length - 1));
        setMsg("You got saved by the armor");
      } else {
        setMsg("Ehhh!!! 💥.You lost the game");
        setType(ctype);
      }
    } else if (ctype[inx] === "Shuffle") {
      setMsg("Oops 🔀 :(.We got to restart");
      setType(ctype);
      setDiffuse(0);
    } else {
      setMsg("Yay! 💣.You got an armor");
      setType((prev) => prev.slice(0, prev.length - 1));
      setDiffuse((prev) => prev + 1);
    }

    if (type.length === 0) {
      dispatch(increasePts());
    }
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div className="flex flex-col justify-around items-center h-full p-4">
      <h1 className="text-4xl font-semibold text-center">
        Pick any random card {user.username}
      </h1>
      <p className="text-2xl font-semibold">{`💣 -> ${diffuse} `}</p>
      <div className="flex gap-4 flex-wrap justify-center items-center">
        {type.length === 0 && (
          <div className="flex flex-col gap-3">
            <p className="text-2xl font-semibold">
              Congrats you won the game!!!
            </p>
            <button
              onClick={dispatch(setUsername(null))}
              className="text-2xl font-semibold text-black h-4 p-6 bg-white rounded-lg text-center flex justify-center items-center hover:opacity-95"
            >
              Restart
            </button>
          </div>
        )}
        {type.length > 0 &&
          type.map((t, idx) => {
            return (
              <div
                key={idx}
                onClick={handleOpen}
                className="text-black font-semibold h-40 w-32 bg-slate-300 flex justify-center items-center rounded-lg cursor-pointer"
              >
                Pick Me!!!
              </div>
            );
          })}
      </div>
      <Modal open={open} onClose={handleClose}>
        <Card msg={msg}></Card>
      </Modal>
    </div>
  );
};

export default GameInterface;
