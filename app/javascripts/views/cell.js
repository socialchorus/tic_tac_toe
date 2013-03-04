TicTac.Views.Cell = Backbone.View.extend({
  el: ".container",
  template: "<div class='cell'>{{value}}</div>",

  render: function(){
    $(this.el).append(Mustache.render(this.template, {model: (this.model)}));
  }
});