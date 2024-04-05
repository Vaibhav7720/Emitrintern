const Card = ({ msg }) => {
  return (
    <div className="absolute rounded-lg p-3 min-h-64 flex flex-col justify-around items-center bg-slate-100 gap-4 top-1/3 mx-14 sm:left-1/3">
      <h1 className="text-3xl font-semibold text-center text-black leading-loose">
        {msg.split(".")[0]}
        <br></br>
        {msg.split(".")[1]}
      </h1>
    </div>
  );
};

export default Card;
