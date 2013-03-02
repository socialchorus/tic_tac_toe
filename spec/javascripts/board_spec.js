describe("TicTac.Views.Board", function(){
  var el, view;

  beforeEach(function(){
    el = $('<div class="container"></div>');
    view = new TicTac.Views.Board();
  });

  it('should print text in a div', function(){
    var anything = spyOn(TicTac.Views.Board.prototype, 'render');
    var new_board = new TicTac.Views.Board();
    new_board.render();
    expect(anything).toHaveBeenCalled();
    expect(view.$('.container').html).toMatch('yo');
  });







//  it('should exists', function(){
//    var board = new TicTac.Views.Board;
//    expect(board).toBeTruthy();
//    expect(board instanceof TicTac.Views.Board).toBeTruthy();
//  });
//
//  describe('render', function(){
//    it('should render cells with ids that match all locations in our collection', function(){
//      for(var i=0; i < 9; i++){
//        expect($("#"+TicTac.currentBoard.models[i].get('location')+"")).toBeTruthy();
//      }
//    })
//  })


});