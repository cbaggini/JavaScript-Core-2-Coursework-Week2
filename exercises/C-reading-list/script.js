function readingList(books) {
  let content = document.querySelector("#content");
	async function getImage(i) {
		let res;
		let qry = `title=${i.title.split(' ').join('+')}&author${i.author.split(' ').join('+')}`;
		await fetch(`http://openlibrary.org/search.json?${qry}`)
				.then(response => response.json())
				.then(function(data) { 
					res = `http://covers.openlibrary.org/b/isbn/${data.docs[0]['isbn'][1]}-M.jpg` ;
				});
		return res;
	}
	let str = `<ul style="list-style-type: none; display: flex; flex-direction: row; ">`;
	for (i of books) {
		let bkg = "red";
		if (i.alreadyRead) {
			bkg = "green";
		}
		str += `<li style="background-color:${bkg}; display: flex; flex-direction: column; justify-content: center; margin: 1rem; padding: 1rem;">
			<p>"${i.title}" by ${i.author}</p>
			<img id = ${i.title.split(' ').join('_')} src="" height="238" style="margin: auto">
			</li>`;
	}
	str += `</ul>`;
	content.innerHTML += str;
	for (i of books) {
		let image = document.querySelector(`#${i.title.split(' ').join('_')}`);
		getImage(i).then(data => image.src = data);	
	}
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);