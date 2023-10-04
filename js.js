//#1

class Subject1 {
	constructor() {
		this.observers = [];
	}

	addObserver(observer) {
		this.observers.push(observer);
	}

	removeObserver(observer) {
		const index = this.observers.indexOf(observer);
		if(index > -1) {
			this.observers.splice(index, 1);
		}
	}

	notifyObservers() {
		for(let observer of this.observers) {
			observer.update();
		}
	}
}

class Observer1 {
	update() {
		console.log('Observer updated!');
	}
}

// Instantiate the Subject
let subject = new Subject1();

// Add multiple observers
let observer1 = new Observer1();
let observer2 = new Observer1();
subject.addObserver(observer1);
subject.addObserver(observer2);

// Call notifyObservers
subject.notifyObservers(); // Each observer gets updated

//#2

const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};

const fruits = ['apple', 'banana', 'cherry', 'date'];
let {name, age} = person;
let [banana, date] = fruits;
let {address: {city, country}} = person;

console.log(name);
console.log(age);
console.log(banana);
console.log(date);
console.log(country);
console.log(city);

//3
async function fetchPosts() {
	try{
	const url = ('https://jsonplaceholder.typicode.com/posts?_limit=10');
	console.log(url);
	}
	catch (err) {
		console.log("error occurred");
		console.log(err);
	}
	const fetchData10 = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
}

// Call the function to fetch posts
fetchPosts();

//#4
class Subject {
	constructor() {
		this.observers = [];
	}

	addObserver(observer) {
		this.observers.push(observer);
	}

	removeObserver(observer) {
		this.observers = this.observers.filter(obs => obs !== observer);
	}

	notifyObservers(data) {
		this.observers.forEach(observer => observer.update(data));
	}

	async fetchAndNotify() {
		const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
		try {
			const response = await fetch(url);
			const data = await response.json();
			this.notifyObservers(data);
		} catch (error) {
			this.notifyObservers(`Error: ${error.message}`);
		}
	}
}

class Observer {
	update(data) {
		if (typeof data === 'string') {
			console.log(data);
		} else {
			const [{ title }] = data;
			console.log(title);
		}
	}
}

// Instantiate the Subject
const subject1 = new Subject();

// Add observers
subject1.addObserver(new Observer());
subject1.addObserver(new Observer());

// Call the fetchAndNotify method
subject1.fetchAndNotify();