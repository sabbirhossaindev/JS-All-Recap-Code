// Arguments holi array like object aita kintu object na....
// arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.

function add(num1, num2) {
    console.log(num1, num2)
    console.log(arguments);
}
add(12, 13, 44, 76, 73, 64, 98, 99);
/*
12 13
[Arguments] {
  '0': 12,
  '1': 13,
  '2': 44,
  '3': 76,
  '4': 73,
  '5': 64,
  '6': 98,
  '7': 99
}
*/

function func1(a, b, c) {
    console.log(arguments[0]);
    // expected output: 1
  
    console.log(arguments[1]);
    // expected output: 2
  
    console.log(arguments[2]);
    // expected output: 3
  }
  
func1(1, 2, 3);
/*
1
2
3
*/