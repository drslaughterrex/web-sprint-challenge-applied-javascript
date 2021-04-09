import axios from "axios";

const Card = (article) => {
	// TASK 5
	// ---------------------
	// Implement this function, which should return the markup you see below.
	// It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
	// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
	// The text inside elements will be set using their `textContent` property (NOT `innerText`).
	// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
	//
	// <div class="card">
	//   <div class="headline">{ headline }</div>
	//   <div class="author">
	//     <div class="img-container">
	//       <img src={ authorPhoto }>
	//     </div>
	//     <span>By { authorName }</span>
	//   </div>
	// </div>
	//
	// console.log(article);

	const div = document.createElement("div");
	const divH = document.createElement("div");
	const divA = document.createElement("div");
	const divI = document.createElement("div");
	const img = document.createElement("img");
	const span = document.createElement("span");

	div.classList.add("card");
	divH.classList.add("headline");
	divA.classList.add("author");
	divI.classList.add("img-container");

	div.appendChild(divH);
	div.appendChild(divA);
	divA.appendChild(divI);
	divI.appendChild(img);
	divA.appendChild(span);

	return div;
};

const cardAppender = (selector) => {
	// TASK 6
	// ---------------------
	// Implement this function that takes a css selector as its only argument.
	// It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
	// However, the articles do not come organized in a single, neat array. Inspect the response closely!
	// Create a card from each and every article object in the response, using the Card component.
	// Append each card to the element in the DOM that matches the selector passed to the function.
	//
	const cardContainer = document.querySelector(".cards-container");

	axios
		.get(`https://lambda-times-api.herokuapp.com/articles`)
		.then((res) => {
			let articles = Object.values(res.data.articles);
			// console.log(articles);
			articles.forEach((index) => {
				let newItem = index;

				newItem.forEach((index) => {
					const card = Card(index);
					cardContainer.appendChild(card);
				});
			});
		})

		.catch((error) => {
			console.log("ERROR!", error);
		});
};

export { Card, cardAppender };
