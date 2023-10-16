// შექმენი შემდეგი სტრუქტურა JS -ის გამოყენებით და დაამატე DOM-ში:

// <div id=”card”>
// <h2>Gandalf</h2>
// <a href=”#”>Go to profile</a>
// </div>

const cardDiv = document.createElement("div");
cardDiv.id = "card";

const header2 = document.createElement("h2");
header2.innerText = "Gandalf";

const anchor = document.createElement("a");
anchor.innerText = "Go to profile";
anchor.setAttribute("href", "#");

document.body.appendChild(cardDiv);
cardDiv.appendChild(header2);
cardDiv.appendChild(anchor);
