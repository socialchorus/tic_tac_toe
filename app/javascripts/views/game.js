TicTac.Views.Game = Backbone.View.extend({
  initialize: function() {
    var boardCells = new TicTac.Collections.BoardCells([
      { },
      { },
      { },
      { },
      { },
      { },
      { },
      { },
      { }
    ]);
    TicTac.boardView = new TicTac.Views.Board({collection: boardCells });
    TicTac.boardView.render();
  }
});
