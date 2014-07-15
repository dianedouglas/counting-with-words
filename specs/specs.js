describe("numbWord", function(){
  it("returns its word version for 3 digit numbers",function(){
    numbWord(234).should.equal("two hundred and thirty four");
  });
  it("returns its word version for 1 digit numbers",function(){
  numbWord(4).should.equal("four");
  });
  it("returns its word version for 2  digit numbers",function(){
  numbWord(20).should.equal("twenty");
  });
  it("returns its word version for 3  digit numbers",function(){
  numbWord(302).should.equal("three hundred and two");
  });
  it("returns its word version for 4 digit numbers",function(){
    numbWord(1234).should.equal("one thousand two hundred and thirty four");
  });
    it("returns its word version for 5 digit numbers",function(){
    numbWord(54321).should.equal("fifty four thousand three hundred and twenty one");
  });
  it("returns its word version for 6 digit numbers",function(){
  numbWord(900100).should.equal("nine hundred thousand one hundred");
  });
   it("returns its word version for 6 digit numbers with five zeros",function(){
  numbWord(900000).should.equal("nine hundred thousand");
  });
  it("returns zero for a number consisting of only zeroes",function(){
  numbWord(000).should.equal("zero");
  });
  it("returns its word version for 7 digit numbers",function(){
  numbWord(1987602).should.equal("one million nine hundred and eighty seven thousand six hundred and two");
  });
  it("returns its word version for 7 digit numbers with six zeros",function(){
  numbWord(1000000).should.equal("one million");
  });
  it("returns its word version for a huge number with a lot of zeroes",function(){
  numbWord(1000000000000).should.equal("one trillion");
  });
   it("returns its word version for a huge number with a small remainder",function(){
  numbWord(1000000000002).should.equal("one trillion and two");
  });
  it("returns its word version for a huge crazy number",function(){
  numbWord(9876543210907).should.equal("nine trillion eight hundred and seventy six billion five hundred and forty three million two hundred and ten thousand nine hundred and seven");
  });
  it("returns its word version for a huge number with a mix of zeroes and integers",function(){
  numbWord(1000000100002).should.equal("one trillion one hundred thousand and two");
  });
});


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
    it("takes the number 302 and returns its word",function(){
  firstNumberSection(302).should.equal("three hundred and two");
  });
});

