const currentDate=new Date();
console.log("currentDate:",currentDate);
console.log("date:",currentDate.getDate());
console.log("year:",currentDate.getFullYear());
console.log("month:",currentDate.getMonth()+1);
console.log("hour:",currentDate.getHours());
console.log("minutes:",currentDate.getMinutes());
console.log("second:",currentDate.getSeconds());
currentDate.setFullYear(2022);
console.log("after the set full year:",currentDate);
currentDate.setMonth(5);
console.log("after set month:",currentDate);// 0-indexed: 0 is January, 11 is December
console.log("time in miiliseconds since 1970:",currentDate.getTime());
console.log("day:",currentDate.getDay());// 0 is Sunday, 6 is Saturday

//Setting Date and Time Components

let date = new Date();

date.setFullYear(2025);
date.setMonth(11); // December
date.setDate(25);
date.setHours(10);
date.setMinutes(30);
date.setSeconds(45);
date.setMilliseconds(123);

console.log(date);
console.log(date.toString()); // Full string representation
console.log(date.toDateString()); // Date portion only
console.log(date.toTimeString()); // Time portion only
console.log(date.toISOString()); // ISO format (UTC)
console.log(date.toLocaleDateString()); // Localized date
console.log(date.toLocaleTimeString()); // Localized time

//Date Calculations

let date1 = new Date();

// Adding 5 days
date1.setDate(date1.getDate() + 5);
console.log(date1);

// Subtracting 2 months
date1.setMonth(date1.getMonth() - 2);
console.log(date1);

