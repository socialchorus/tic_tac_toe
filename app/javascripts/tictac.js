var TicTac = {
  Views: {},
  Collections: {},
  Models: {}
};



//load order, initializer for collection
TicTac.initialize = function(){
  this.newBoard = function(){
    return new TicTac.Collections.BoardCells([
      { },
      { },
      { },
      { },
      { },
      { },
      { },
      { },
      { }
    ]);
  };

  new TicTac.Views.Game();
};