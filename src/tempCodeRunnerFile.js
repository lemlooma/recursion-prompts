var sum = function(array) {
    if ( array.length === 0) {
    return 0;
  } else {
    const [head, ...rest] = array;
    return head + sum(rest)
  }
};
console.log(sum([1,2,3,4,5,6])); // 21