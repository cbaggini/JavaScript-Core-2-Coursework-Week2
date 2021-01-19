function listOfColours(colours) {
  let content = document.getElementById('content');
  let dropDown = document.createElement('select');
  dropDown.addEventListener('change', e => {
		let para = document.querySelector('p');
		para.innerHTML = `You have selected: ${e.target.value}`;
		para.style.color = e.target.value;
	  })
  let para1 = document.createElement('p');
  colours.forEach( el => {
	  let option = document.createElement('option');
	  option.value = el;
	  option.innerHTML = el;
	  dropDown.append(option);
  });
  content.append(dropDown);
  content.append(para1);
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
