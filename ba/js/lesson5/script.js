//Task 1 Show reverse array

const arrShowReverse = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
};

arrShowReverse([12, 123, 1234, 12345, 123456]);

//Task 2 Fibbonachi numbers

function fibo(n) {
  if (n == 0) return 0;
  if (n == 1 || n == 2) {
    return 1;
  }
  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(1));
console.log(fibo(2));
console.log(fibo(3));
console.log(fibo(6));
console.log(fibo(36));
