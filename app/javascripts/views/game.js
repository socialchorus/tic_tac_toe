TicTac.Views.Game = Backbone.View.extend({

  initialize: function(){
    var new_board = new TicTac.Views.Board();
    new_board.render();
  }









//  initialize: function() {
////    var boardView = new TicTac.Views.Board({ collection: this.collection });
//    var newBoard = new TicTac.Collections.BoardCells([
//      { location: '0-0' },
//      { location: '0-1' },
//      { location: '0-2' },
//      { location: '1-0' },
//      { location: '1-1' },
//      { location: '1-2' },
//      { location: '2-0' },
//      { location: '2-1' },
//      { location: '2-2' }
//    ]);
//
//    var boardView = new TicTac.Views.Board({ collection: newBoard });
//    console.log(boardView.el)
//    boardView.render();
//  }
});
