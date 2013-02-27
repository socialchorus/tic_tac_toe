describe('TicTac.Collections.BoardCells', function(){
  var boardCells;

  beforeEach(function(){
    boardCells = new TicTac.Collections.BoardCells([{location: '1', value: '1'}, {location:'2', value: '2'}]);
  }) ;

  it ('should exist', function(){
     expect(boardCells).toBeTruthy();
     expect(boardCells instanceof TicTac.Collections.BoardCells).toBeTruthy();
  });

  it('should have models', function(){
    expect(boardCells.models[0].get('location')).toEqual('1');
    expect(boardCells.models[0].get('value')).toEqual('1');
  });

})