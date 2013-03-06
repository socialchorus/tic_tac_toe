describe("TicTac.Views.Board", function(){
  var el;
    //locations
  beforeEach(function(){
    el = $('<div class="container"></div>');

  });

  it('should print text in a div', function(){
     var boardCells =  new TicTac.Collections.BoardCells([
        {location: '1', value: '1'},
        {location:'2', value: '2'},
        {location:'3', value: '3'},
        {location:'4', value: '4'}
      ])
    var renderSpy = spyOn(TicTac.Views.Cell.prototype, 'render');
    var new_board = new TicTac.Views.Board({collection: boardCells});
    new_board.render();
    expect(renderSpy.callCount).toBe(4);
  });
});