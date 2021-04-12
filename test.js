require('./index.js');

var startString = "aaaaaa";
console.log(`Start String: ${startString}`);

var endString = startString.replaceAll('a', 'b');
console.log(`End String: ${endString}`);
