describe("TicTac.Models.RandomShuffler", function(){

  it ("should generate a random number between 0 and 8", function(){
    var randomShuffler = new TicTac.Models.RandomShuffler()
    var rangeOfValues =  [0,1,2,3,4,5,6,7,8]
    console.log(randomShuffler)
    expect(rangeOfValues).toContain(randomShuffler.generate())
  })


})