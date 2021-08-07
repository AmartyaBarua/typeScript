var value: any = 100;
var moreValue = <number>value;

console.log(value);
console.log(moreValue);

console.log(typeof value);
console.log(typeof moreValue);

// interface (similar to an abstract class, it is an structure and the classes
// derived from it must follow the structure)
interface Customer {
  custCode: number;
  custName: string;
}

var cust1 = <Customer>{ custCode: 1001, custName: "banana", custAge: 23 };
console.log(cust1);
var cust2 = <Customer>{ custName: "banana" };
console.log(cust2);

var num: number = 100;
num > 0
  ? console.log("positive")
  : num < 0
  ? console.log("negative")
  : console.log("zero");
