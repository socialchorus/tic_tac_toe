describe("TicTac.Models.Cell", function(){

  describe('#setX', function(){
    var thisCell;
    beforeEach(function(){
      thisCell = new TicTac.Models.Cell
    });

    it('should set the value to x', function(){
      var setXSpy = spyOn(thisCell, 'set')
      thisCell.setX();
      expect(setXSpy).toHaveBeenCalledWith({'value': 'x'});
    })
  })
});