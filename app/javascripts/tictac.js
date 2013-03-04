var TicTac = {
  Views: {},
  Collections: {},
  Models: {}
};



//load order, initializer for collection
TicTac.initialize = function(){
  var newBoard = function(){
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

  new TicTac.Views.Game( { collection: newBoard });
};