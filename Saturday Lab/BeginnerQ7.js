  // Question 7
  const basketballGame = {
    score: 0,
    fouls: 0,
    noOfFouls() {
      this.fouls++;
      return this;
    },
    freeThrow() {
      this.score++;
      return this;
    },
    basket() {
      this.score += 2;
      return this;
    },
    threePointer() {
      this.score += 3;
      return this;
    },
    halfTime() {
      console.log("Halftime score is " + this.score + " with " + this.fouls + " fouls.");
      return this;
    },
    fullTime() {
      console.log(
        "Fulltime score is " + this.score + " with " + this.fouls + " fouls."
      );
      return this;
    },
  };
  //modify each of the above object methods to enable function chaining as below:
  basketballGame
    .basket()
    .freeThrow()
    .freeThrow()
    .basket()
    .threePointer()
    .halfTime()
    .threePointer()
    .freeThrow()
    .noOfFouls()
    .fullTime();
  
