const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
		}
]

const elements = document.querySelector(".books-container");

articles.forEach((article, index) => makeItOrSomething(index));

function makeItOrSomething(articlesIndex)
{
	const newArticle = document.createElement("article");
	const getArticle = document.querySelector("article");

	if(getArticle) {
		newArticle.classList.add(...getArticle.classList);
	}

	const articleHTML = wrapper(articlesIndex);

	console.log(articleHTML);
	
	newArticle.innerHTML = articleHTML;
	console.log(newArticle)

	displaytoPage(newArticle, elements);
}

function wrapper(articlesIndex) 
{
	const currentArticle = articles[articlesIndex];
	return `
	<section class="book-info">
				<h3>${currentArticle.date}</h3>
				<p>${currentArticle.ages}</p>
				<p>${currentArticle.genre}</p>
				<p>${currentArticle.stars}</p>
			</section>
			<section class="book-and-review">
				<h2>${currentArticle.title}</h2>
				<img src="${currentArticle.imgSrc}" alt="${currentArticle.imgAlt}">
				<p>${currentArticle.description}</p>
			</section>`;
}

function displaytoPage(article, selector)
{
	selector.appendChild(article);

}

/*
<div class="book">
                    <section class="book-info">
                        <h3>July 5, 2022</h3>
                        <p>10-14</p>
                        <p>Fantasy</p>
                        <p>⭐⭐⭐⭐⭐</p>
                    </section>
                    <section class="book-and-review">
                        <h2>Septimus Heap Book One: Magyk</h2>
                        <img src="https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg" alt="Book cover for Septimus Heap 1">
                        <p>If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.</p>
                    </section>
                </div>

<div class="book">
                    <section class="book-info">
                        <h3>December 12, 2021</h3>
                        <p>12-16</p>
                        <p>Fantasy</p>
                        <p>⭐⭐⭐⭐</p>
                    </section>
                    <section class="book-and-review">
                        <h2>Magnus Chase Book One: Sword of Summer</h2>
                        <img src="https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300" alt="Book cover for Magnus Chase 1">
                        <p>The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.</p>
                    </section>
                </div>
*/