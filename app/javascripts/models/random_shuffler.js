TicTac.Models.RandomShuffler = Backbone.Model.extend({
  generate: function(){
    var today = new Date();
    var seed = today.getSeconds();
    return (Math.floor(Math.random(seed)*8))
  }
})