TicTac.Views.Board = Backbone.View.extend({
  el: ".container",

  render: function(){
    var _this = this;
    TicTac.newBoard().forEach(function(cell){
      var newCell = new TicTac.Views.Cell({ model: cell })
      newCell.render();
      _this.$el.append(newCell.el);
    })
  }
})
