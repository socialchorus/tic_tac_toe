describe("TicTac.Views.Game", function(){
  it('should create an instance of board', function(){
    var new_board = spyOn(TicTac.Views.Board.prototype, 'initialize');
    var board_render = spyOn(TicTac.Views.Board.prototype, 'render');
    new TicTac.Views.Game();
    expect(new_board).toHaveBeenCalled();
    expect(board_render).toHaveBeenCalled();
  });
});