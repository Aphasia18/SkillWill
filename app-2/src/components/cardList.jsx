import React from "react";
import Card from "./card";
import idiotCover from "../card-images/idiot.jpg";
import nevermoreCover from "../card-images/nevermore.jpg";
import MasMar from "../card-images/mm.jpg";

const data = [
  {
    id: 1,
    name: "The Idiot",
    image: idiotCover,
    desc: "Story of an idiot",
    characters: ["idiot1", "idiot2", "idiot3"],
  },
  {
    id: 2,
    name: "Nevermore",
    image: nevermoreCover,
    desc: "Talking raven, he got some bars",
    characters: ["Raven"],
  },
  {
    id: 3,
    name: "The Master and Margarita",
    image: MasMar,
    desc: "Master and some female",
    characters: ["Master", "Margarita"],
  },
];

const cardList = () => {
  function action(name, characters) {
    console.log(
      `the book name is: ${name}, following book has this characters:${characters.join(
        ", "
      )}}`
    );
  }
  return (
    <div className="card-list">
      {data.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          image={card.image}
          desc={card.desc}
          action={() => action(card.name, card.characters)}
          characters={card.characters.map((c, index) => (
            <p key={index}>{c}</p>
          ))}
        />
      ))}
    </div>
  );
};

export default cardList;
