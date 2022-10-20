function memoFibonacci() {
  let memo = [];
  return function fibonacci(n) {
    if (memo.length > n) {
      // console.log("memo");
      return memo;
    }
    // console.log("NO memo");
    let arr = [0, 1];
    for (let i = 2; i < n; i++) {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
    memo = arr;
    return arr;
  };
}

function eneacci(n, D) {
  const memo = memoFibonacci(D);
  const initialValues = memo(D).slice(0, D);
  for (let i = D; i < n; i++) {
    let temp = 0;
    for (let j = 0; j < D; j++) {
      temp = temp + initialValues[j];
    }
    initialValues.push(temp);
    initialValues.shift();
    // console.log("end", initialValues);
  }

  return initialValues[D - 1];
}

module.exports = eneacci;
