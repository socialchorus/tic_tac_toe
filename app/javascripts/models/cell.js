TicTac.Models.Cell = Backbone.Model.extend({
  setX: function(){
    this.set({'value': 'x'});
  },

  setO: function(){
    this.set({'value': 'O'})
  }
});