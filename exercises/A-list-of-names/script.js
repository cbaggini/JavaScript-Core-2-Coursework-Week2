function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  people.forEach(el => {
	  let personName = document.createElement('h1');
	  personName.innerHTML = el.name;
	  content.append(personName);
	  let personJob = document.createElement('h2');
	  personJob.innerHTML = el.job;
	  content.append(personJob);
  })
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
