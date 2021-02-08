// Let's review our loops

// While loops

// Write a while loop that outputs all integers from 0 to 100

var count = 0;
while (count < 100) {
   count ++;
    console.log(count);
}


// Write a while loop that outputs all integers from 10 to 0 and outputs Done!

for (var i = 10; i >= 0; i--) {
  console.log(i);
}

// For loops - Great for outputing

// Write a for loop that outputs all integers from 0 to 50

for (var i = 0; i <= 50; i++) {
  console.log(i);
}


// Write a for loop that outputs all even integers from 0 to 300.

for (var i = 0; i <= 300; i+=2) {
  console.log(i);
}

// For each loops (great for outputting a content of list)

// Write a for each loop that outputs all elements of an array (list)

var flavors = ["Strawberry", "Chocolate", "Rocky Road", "Chocolate Chip", "Raspbery Crunch"];

for (var i = 0; i <= flavors.length; i++){
  console.log(flavors[i]);
}