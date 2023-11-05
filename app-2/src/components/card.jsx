const Card = ({ name, image, action, desc, characters }) => {
  return (
    <div className="card">
      <h1 className="card-title"> Title: {name}</h1>
      <h2>Description</h2>
      <p>{desc}</p>
      <div className="charList">
        <h2>Characters</h2>
        {characters}
      </div>
      <div className="img-box">
        <img src={image} alt="" />
      </div>

      <button onClick={() => action(name, characters)} className="btn">
        Show info
      </button>
    </div>
  );
};

export default Card;
