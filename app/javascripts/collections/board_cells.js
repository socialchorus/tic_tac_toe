TicTac.Collections.BoardCells = Backbone.Collection.extend({
  model: TicTac.Models.Cell

//  row: function(rowNum){
//    var that = this;
//    return _.map([rowNum*3, rowNum*3+1, rowNum*3+2], function(num){ return that.models[num]; });
//  }
});