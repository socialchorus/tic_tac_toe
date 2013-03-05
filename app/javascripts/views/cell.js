TicTac.Views.Cell = Backbone.View.extend({
  template: "<div class='cell'>{{value}}</div>",
  events: {
    'click': 'placeX'
  },

  placeX: function(){
    console.log('yodog');
    this.model.setX();
  },

  render: function(){
    var renderedTemplate = Mustache.render(this.template, {model: (this.model)});
    this.$el.html(renderedTemplate);
  }
});