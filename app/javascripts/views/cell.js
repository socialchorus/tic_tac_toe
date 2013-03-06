TicTac.Views.Cell = Backbone.View.extend({
  template: "<div class='cell'>{{value}}</div>",

  events: {
    'click': 'placeX'
  },

  initialize: function(){
    console.log(this.model) ;
    this.model.on('change', this.render, this);
  },

  placeX: function(){
    this.model.setX();
  },

  render: function(){

    var renderedTemplate = Mustache.render(this.template, this.model.toJSON());
    this.$el.html(renderedTemplate);
  }
});