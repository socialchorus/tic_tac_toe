TicTac.Views.Board = Backbone.View.extend({
  el: ".container",

  addOne: function(model) {
    var newCellView = new TicTac.Views.Cell({ model: model});
    newCellView.render();
    this.$el.append(newCellView.el);
  },

  render: function(){

    this.collection.forEach(this.addOne, this);
  }

});
