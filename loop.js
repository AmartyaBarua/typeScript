for (var i = 1; i <= 5; i++) {
    console.log("banana" + i);
}
console.log(i);
var val2 = [2, 3, 0, 0, 9, 9];
// iterate through the elements of collection
for (var _i = 0, val2_1 = val2; _i < val2_1.length; _i++) {
    var val = val2_1[_i];
    console.log(val);
}
// iterate through the index of each element
for (var v1 in val2) {
    console.log(v1);
}
for (var v1 in val2) {
    console.log(v1 + " " + val2[v1]);
}
