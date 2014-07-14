describe("numericalValue", function(){
  it("takes a single digit numerical value and returns its word version",function(){
    numericalValue(1).should.equal("one");
  });
  it("takes a number in the 20's and returns its word version.", function(){
    numericalValue(25).should.equal("twenty five");
  });
});
