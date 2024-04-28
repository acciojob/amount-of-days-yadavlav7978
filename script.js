//your JS code here. If required.

let daysOfAYear=(n)=>{
	if(n%400==0 || (n%4==0 && n%100!=0)) return 366;
	return 365;
}


let value = prompt("Enter the year.");

alert(daysOfAYear(value));
