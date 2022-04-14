// 1. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ რიცხვი არის ლუწი ან false -ს თუ რიცხვი არის კენტი.

function isEven(a) {
	// if (a % 2 === 0) return true;
	// return false;
	return a % 2 === 0;
}

console.log(isEven(4), isEven(5));
// 2. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ორ რიცხვს - მართკუთხედის გვერდების ზომებს და დააბრუნებს მართკუთხედის ფართობს.
function getRectArea(a, b) {
	let area = a * b;
	return area;
}
console.log(getRectArea(2, 3));
// 3. დაწერეთ ფუქცია, რომელიც პარამეტრად მიიღებს ერთ რიცხვს - კვადრატის გვერდის სიგრძეს და დააბრუნებს კვადრატის ფართობს. ფართობის გამოსათვლელად გამოიყენეთ #2 პუნქტში აღწერილი ფუნქცია.
function getSquareArea(a) {
	return getRectArea(a, a);
}
console.log(getSquareArea(4));
// 4.
// Math.random() - არის ფუნქცია, რომელიც აბრუნებს შემთხვევით რიცხვს 0-დან 1-მდე.
// Math.floor() - ამრგვალებს რიცხვს ქვემოთ, მაგალითად Math.floor(4.9) აბრუნებს 4-ს.
// Math.round() - ამრგვალებს რიცხვს უახლოეს მთელამდე.

// დაწერეთ ფუნქცია, რომელიც Math.random() ფუნქციის გამოყენებით დააგენერირებს და დააბრუნებს 0-დან 100-მდე შემთხვევით რიცხვს.
function getRandomNumber() {
	return Math.floor(Math.random() * 100);
}
console.log(getRandomNumber());
// 5. შექმენით ობიექტების 5 ელემენტიანი მასივი, სადაც თითოეულ ობიექტს გააჩნია name და age ველები. შემდეგ შექმენით ფუნქცია, რომელიც პარამეტრად მიიღებს ამ მასივს და დააბრუნებს ყველაზე ახალგაზრდა ობიექტს (რომლის age ველიც არის უმცირესი).
const characters = [
	{
		name: "harry",
		age: 13,
	},
	{
		name: "he who must not be named",
		age: 60,
	},
	{
		name: "Nearly Headless Nick",
		age: 500,
	},
	{
		name: "albus dumbledore",
		age: 70,
	},
	{
		name: "severus snape",
		age: 40,
	},
];

function getYoungest(arr) {
	let minAge = Math.min(...arr.map((user) => user.age));
	let youngestUser = arr.filter((user) => user.age == minAge);
	return youngestUser;

	// let sortedArr = arr.sort(function (a, b) {
	// 	return a.age - b.age;
	// });
	// return sortedArr;
}
console.log(getYoungest(characters));
// 6. დაწერეთ ფუნქცია, getCurrencySymbolFromCode რომელიც პარამეტრად მიიღებს ვალუტის კოდს (USD ან EUR ან GEL) სტრინგის სახით და დააბრუნებს ამ კოდის შესაბამის სიმბოლოს ($, €, ლ) თუ ისეთი კოდს გადავცემ რომლის სიმბოლოც არ მაქვს დააბრუნოს შესაბამისი შეტყობინება

function getCurrencySymbolFromCode(code) {
	let symbol;
	let codeUpper = code.toUpperCase();
	let codeLower = code.toLowerCase();

	switch (codeUpper) {
		case "GEL":
			symbol = "ლ";
			break;
		case "USD":
			symbol = "$";
			break;
		case "EUR":
			symbol = "€";
			break;

		default:
			symbol = "none";
			break;
	}
	return symbol;
}

console.log(getCurrencySymbolFromCode("usd"));
