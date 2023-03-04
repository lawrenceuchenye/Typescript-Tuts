/*let hello: string = "helli typescript";

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

const doSomething=():void =>{
	console.log("doSomething");
}

const foo:any="hello";


const user3: User | null=null;

const id: string | number ="law";

console.log(getFullName("law", "uche"));

const id_:number=id as unknown as number;

console.log(id_);
console.log("okay o");


const someEl=document.querySelector(".foo") as HTMLInputElement;

console.log("hello",someEl.value);

interface CUser{
	getSomething():number;
}

class Acc{
   firstName:string;
   lastName:string;
   constructor(firstName:string,lastName:string){
	   this.firstName=firstName;
	   this.lastName=lastName;
   };
   getFullName():string{
	   return this.firstName+" "+this.lastName;
	};
};


const userr=new Acc("law","uche");
console.log(userr.getFullName());
*/

enum Status{
	Connected,
	Disconnect,
	Badnetwork
}

console.log(Status.Badnetwork);
