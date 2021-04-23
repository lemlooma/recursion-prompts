var powerOfTwo = function(n) {
  if (n === 1) return true
  if (n % 3 === 0) return false; 
  return powerOfTwo(n / 3)
};
// console.log(powerOfTwo(1)); // true
console.log(powerOfTwo(18)); // true