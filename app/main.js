var AppView = Backbone.View.extend({
  // el - stands for element. Every view has a element associate in with HTML content will be rendered.
  el: '.container',
  // It's the first function called when this view it's instantiated.
  initialize: function(){
  this.render();
  },
    // $el - it's a cached jQuery object (el), in which you can use jQuery functions to push content. Like the H>
  render: function(){
    this.$el.html("Tic Tac Toe Welcome");
    }
});

$(document).ready(function() {
  var appView = new AppView();
});



