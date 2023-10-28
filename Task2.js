// fetch ფუნქციის გამოყენებით წამოიღე
// მონაცემები მოცემული მისამართიდან და
// გამოიტანე DOM-ში პოსტის სახით

const url = "https://jsonplaceholder.typicode.com/posts";
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Response is not ok");
    }
    return response.json();
  })
  .then((posts) => {
    const postContainer = document.getElementById("post-container");

    posts.forEach((post) => {
      const postDiv = document.createElement("div");
      postDiv.classList.add("post");

      const userID = document.createElement("h1");
      userID.textContent = post.id;

      const titleElement = document.createElement("h2");
      titleElement.textContent = post.title;

      const bodyElement = document.createElement("p");
      bodyElement.textContent = post.body;

      postDiv.appendChild(userID);
      postDiv.appendChild(titleElement);
      postDiv.appendChild(bodyElement);

      postContainer.appendChild(postDiv);
    });
  })
  .catch((error) => {
    console.error("Error", error);
  });
