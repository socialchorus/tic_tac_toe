describe("TicTac.Models.Game", function(){

  it('should create an instance of board', function(){
    spyOn(TicTac.Views.Board.prototype, 'initialize');
    spyOn(TicTac.Views.Board.prototype, 'render');
    new TicTac.Models.Game();
    expect(TicTac.Views.Board.prototype.initialize).toHaveBeenCalled();
    expect(TicTac.Views.Board.prototype.render).toHaveBeenCalled();
  });

});