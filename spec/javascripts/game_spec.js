describe("TicTac.Views.Game", function(){
  it('should create an instance of board', function(){
    var new_board = spyOn(TicTac.Views.Board.prototype, 'initialize');
    new TicTac.Views.Game()
    expect(new_board).toHaveBeenCalled();
  });

  it('should render board view', function(){
    var board_render = spyOn(TicTac.Views.Board.prototype, 'render');
    new TicTac.Views.Game();
    expect(board_render).toHaveBeenCalled();
  })









//  var collection
//
//  it('should render a board', function(){
//    var boardRender = spyOn(TicTac.Views.Board.prototype, "render");
//    new TicTac.Views.Game();
//    expect(boardRender).toHaveBeenCalled();
//  })
});