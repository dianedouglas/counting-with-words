describe("firstNumberSection", function(){
  it("takes a single digit numerical value and returns its word version",function(){
    firstNumberSection(1).should.equal("one");
  });
  it("takes a number in the 20's and returns its word version.", function(){
    firstNumberSection(25).should.equal("twenty five");
  });
  it("takes a number in the 30's and returns its word version.", function(){
    firstNumberSection(39).should.equal("thirty nine");
  });
  it("takes a multiple of 10 and returns its word version without a zero on the end.", function(){
    firstNumberSection(40).should.equal("forty");
  });
  it("takes a double digit number between 10 and 19 and outputs its word value", function(){
    firstNumberSection(15).should.equal("fifteen");
  });
  it("takes the edge case of input 10 and outputs its word value", function(){
    firstNumberSection(10).should.equal("ten");
  });
  it("takes a number > 100 and returns its word form.", function(){
    firstNumberSection(110).should.equal("one hundred and ten");
  });
  it("takes the number 100 and returns its word",function(){
    firstNumberSection(100).should.equal("one hundred");
  });
  it("takes the number 234 and returns its word",function(){
    firstNumberSection(234).should.equal("two hundred and thirty four");
  });
});

describe("biginNumbas",function(){
  it("takes a number larger that 1000 and adds its big number name and returns the value in words",function(){
    biginNumbas(1234).should.equal("one thousand two hundred and thirty four");
  });
});
