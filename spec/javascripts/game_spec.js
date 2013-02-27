describe("TicTac.Views.Game", function(){
  it('should exists', function(){
    var game = new TicTac.Views.Game();
    expect(game).toBeTruthy();
    expect(game instanceof TicTac.Views.Game).toBeTruthy();
  });

//  it('should create board view upon initializing', function(){
//    var board = new TicTac.Views.Board();
//    expect(Game.new).toEqual()
//  })

  it('should render a board', function(){
    var boardRender = spyOn(TicTac.Views.Board.prototype, "render");
    new TicTac.Views.Game();
    expect(boardRender).toHaveBeenCalled();
  })
});