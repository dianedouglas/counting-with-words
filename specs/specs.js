describe("numericalValue", function(){
  it("takes a single digit numerical value and returns its word version",function(){
    numericalValue(1).should.equal("one");
  });
  it("takes a number in the 20's and returns its word version.", function(){
    numericalValue(25).should.equal("twenty five");
  });
  it("takes a number in the 30's and returns its word version.", function(){
    numericalValue(39).should.equal("thirty nine");
  });
  it("takes a multiple of 10 and returns its word version without a zero on the end.", function(){
    numericalValue(40).should.equal("forty");
  });
  it("takes a double digit number between 10 and 19 and outputs its word value", function(){
    numericalValue(15).should.equal("fifteen");
  });
  it("takes the edge case of input 10 and outputs its word value", function(){
    numericalValue(10).should.equal("ten");
  });

});
