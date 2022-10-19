
function fibonacciRecursivo(n) {
  if (n<2) {
    return n;
  }
  return fibonacciRecursivo(n-1) + fibonacciRecursivo(n-2);
};

function fibonacciIterativo(n) {
  let arr = [0,1];
  for (let i = 2; i<=n; i++){
    arr.push(arr[i-2] + arr[i-1])
  }
  return arr[n]
}


module.exports = { fibonacciIterativo, fibonacciRecursivo }