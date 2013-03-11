TicTac.Models.Cell = Backbone.Model.extend({

  isEmpty: function(){
    return !(this.get('value'))
  }

});