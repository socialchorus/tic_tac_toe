TicTac.Views.Cell = Backbone.View.extend({
  template: "<div class='cell'>{{value}}</div>",

  events: {
    'click': 'place'
  },

  initialize: function(){
    this.model.on('change', this.render, this)
  },

  place: function(){
    if (this.model.isEmpty()) {
      this.model.set({'value': 'x'});
    }
  },

  render: function(){
    var renderedTemplate = Mustache.render(this.template, this.model.toJSON());
    this.$el.html(renderedTemplate);
  }

});