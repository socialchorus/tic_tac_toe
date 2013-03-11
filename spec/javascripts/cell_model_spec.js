describe("TicTac.Models.Cell", function(){

  describe('#isEmpty', function(){

    var thisCell
    beforeEach(function(){
      thisCell = new TicTac.Models.Cell()
    })

    it('Should return true when empty', function(){
      expect(thisCell.isEmpty()).toEqual(true)
    })

    it('Should return false when occupied', function(){
      thisCell.set({'value': 'x'})
      expect(thisCell.isEmpty()).toEqual(false)
    })

  })
});