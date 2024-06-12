function makeCounter(startFrom = 0, incrementBy = 1) {
  let currentCount = startFrom;
  return function () {
    currentCount+= incrementBy;
    console.log(currentCount);
    return currentCount;
  };
}

function makeCounter2() {
    let currentCount = 0;
    return function () {
      currentCount++;
      console.log(currentCount);
      return currentCount;
    };
  }

let counter1 = makeCounter(3,2);
let counter2 = makeCounter2();

counter1(); // 1


