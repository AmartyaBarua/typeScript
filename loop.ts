for (var i = 1; i <= 5; i++) {
  console.log("banana" + i);
}
console.log(i);

var val2 = [2, 3, 0, 0, 9, 9];

// iterate through the elements of collection
for (var val of val2) {
  console.log(val);
}

// iterate through the index of each element
for (var v1 in val2) {
  console.log(v1);
}

for (var v1 in val2) {
  console.log(v1 + " " + val2[v1]);
}
