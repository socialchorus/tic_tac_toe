describe("TicTac.Views.Board", function(){
  it('should exists', function(){
    var board = new TicTac.Views.Board;
    expect(board).toBeTruthy();
    expect(board instanceof TicTac.Views.Board).toBeTruthy();
  });


});