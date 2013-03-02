describe('TicTac', function(){

  describe('#initialize', function(){
    it('should create an instance of game', function(){
      var newGame = spyOn(TicTac.Views.Game.prototype, 'initialize')
      TicTac.initialize();
      expect(newGame).toHaveBeenCalled();
    });




//    it('should fire newBoard on initialization', function(){
//      var expectedLocations = ['0-0','0-1','0-2','1-0','1-1','1-2','2-0','2-1','2-2']
//      TicTac.initialize();
//      expect(TicTac.currentBoard).toBeTruthy();
//      expect(TicTac.currentBoard instanceof TicTac.Collections.BoardCells).toBeTruthy();
//      for(var i=0; i< 9; i++)  {
//        expect(TicTac.currentBoard.models[i].get('location')).toEqual(expectedLocations[i]);
//      }
//    });
  });
});