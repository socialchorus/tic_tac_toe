TicTac.Views.Game = Backbone.View.extend({
  initialize: function() {
    TicTac.boardView = new TicTac.Views.Board({ collection: this.collection() });
    TicTac.boardView.render();
  }
});
