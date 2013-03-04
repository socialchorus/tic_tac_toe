describe("TicTac.Views.Game", function(){
  //location
  beforeEach(function(){
    boardCells = function(){
      new TicTac.Collections.BoardCells([
        {location: '1', value: '1'},
        {location:'2', value: '2'},
        {location:'3', value: '3'},
        {location:'4', value: '4'}
      ]);
    }
  });

  it('should create an instance of board', function(){
    var new_board = spyOn(TicTac.Views.Board.prototype, 'initialize');
    var board_render = spyOn(TicTac.Views.Board.prototype, 'render');
    new TicTac.Views.Game({collection: boardCells});
    expect(new_board).toHaveBeenCalled();
    expect(board_render).toHaveBeenCalled();
  });
});