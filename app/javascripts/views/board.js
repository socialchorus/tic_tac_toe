TicTac.Views.Board = Backbone.View.extend({
  render: function(){
    TicTac.newBoard().forEach(function(cell){
      var newCell = new TicTac.Views.Cell({ model: cell })
      newCell.render()
    })
  }
})
