let hello: string = "helli typescript";

const getFullName = (firstName: string, lastName: string): string => {
	return firstName + " " + lastName;
};

type NAME=string;

interface User {
	name: NAME;
	age?: number;
}

const user1: User = {
	name: "Dave",
	age: 30,
};

const user2: User = {
	name: "Jake",
};

const user3: User | null=null;

const id: string | number ="law";

console.log(getFullName("law", "uche"));
