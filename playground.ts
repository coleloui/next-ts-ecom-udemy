//ts recommends using interfaces over types

// describe data structure in a more natural way
interface Person {
	name: string;
	age: number;
}

// type aliases
// to describe function types
// type Person = {
//     name: string,
//     age: number
// }

export default function play() {
	console.log('hello world');
	const name = 'Louis';
	const age = 32;

	const person = {
		name: 'Shannon',
		age: 30,
	};

	function logPersonInfo(personName: string, personAge: number) {
		const info = `Name: ${personName} age: ${personAge}`;
		console.log(info);
		return info;
	}

	function logPersonInfo2(person: Person) {
		const info = `Name: ${person.name} age: ${person.age}`;
		console.log(info);
		return info;
	}

	logPersonInfo(name, age);
	logPersonInfo2(person);
}
