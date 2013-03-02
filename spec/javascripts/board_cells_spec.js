describe('TicTac.Collections.BoardCells', function(){
  var boardCells;

  beforeEach(function(){
    boardCells = new TicTac.Collections.BoardCells([
      {location: '1', value: '1'},
      {location:'2', value: '2'},
      {location:'3', value: '3'},
      {location:'4', value: '4'}
    ]);
  });

  it('should have models', function(){
    expect(boardCells.models[0] instanceof TicTac.Models.Cell).toBeTruthy();
  });

   describe('#row', function(){
    it('should return an array of length 3', function(){
      expect(boardCells.row(0).length).toBe(3);
      expect(boardCells.row(0)[0].get('location')).toBe('1');
    });
  });

})