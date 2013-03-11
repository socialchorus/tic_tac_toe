describe('TicTac.Collections.BoardCells', function(){
  var boardCells;

  beforeEach(function(){
    boardCells = new TicTac.Collections.BoardCells()
  })

  it('should have models', function(){
    expect(boardCells.model).toBe(TicTac.Models.Cell);
  });

})