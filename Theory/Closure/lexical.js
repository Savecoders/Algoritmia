const myGlobal = 0;

function myFunction() {
  const myLocal = 1;
  console.log(myGlobal); // 0

  function myInnerFunction() {
    const myInnerLocal = 2;
    console.log(myGlobal); // 0
    console.log(myLocal); // 1

    function myInnerInnerFunction() {
      console.log(myGlobal); // 0
      console.log(myLocal); // 1
      console.log(myInnerLocal); // 2
    }

    return myInnerInnerFunction();
  }
  return myInnerFunction();
}
myFunction();

// summary

function sumWithGlobal(num = 0) {
  // closure
  // optional parameter
  return (number = 0) => number + num;
}
