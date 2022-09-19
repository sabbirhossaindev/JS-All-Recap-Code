// Arguments holi array like object aita kintu object na....

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